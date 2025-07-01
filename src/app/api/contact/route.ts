// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 submissions per 15 minutes per IP

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  
  return realIP || cfConnectingIP || 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);
  
  if (!clientData || now > clientData.resetTime) {
    // Reset or create new entry
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return { allowed: true };
  }
  
  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { 
      allowed: false, 
      resetTime: clientData.resetTime 
    };
  }
  
  // Increment count
  clientData.count += 1;
  rateLimitMap.set(ip, clientData);
  
  return { allowed: true };
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().substring(0, 10000); // Limit length and trim
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const clientIP = getClientIP(request);
    
    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIP);
    if (!rateLimitCheck.allowed) {
      const resetTime = new Date(rateLimitCheck.resetTime!).toISOString();
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please try again later.',
          resetTime 
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitCheck.resetTime!.toString()
          }
        }
      );
    }
    
    // Parse and validate request body
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }
    
    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email).toLowerCase(),
      subject: body.subject ? sanitizeInput(body.subject) : null,
      message: sanitizeInput(body.message)
    };
    
    // Validate field lengths
    if (sanitizedData.name.length < 1 || sanitizedData.name.length > 255) {
      return NextResponse.json(
        { error: 'Name must be between 1 and 255 characters.' },
        { status: 400 }
      );
    }
    
    if (sanitizedData.email.length < 5 || sanitizedData.email.length > 255) {
      return NextResponse.json(
        { error: 'Email must be between 5 and 255 characters.' },
        { status: 400 }
      );
    }
    
    if (sanitizedData.message.length < 10 || sanitizedData.message.length > 10000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 10,000 characters.' },
        { status: 400 }
      );
    }
    
    if (sanitizedData.subject && sanitizedData.subject.length > 500) {
      return NextResponse.json(
        { error: 'Subject must be less than 500 characters.' },
        { status: 400 }
      );
    }
    
    // Get user agent
    const userAgent = request.headers.get('User-Agent') || 'Unknown';
    
    // Create Supabase client
    const supabase = await createClient();
    
    // Insert into database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: sanitizedData.name,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
        ip_address: clientIP,
        user_agent: userAgent
      })
      .select('id')
      .single();
    
    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 500 }
      );
    }
    
    // Get current rate limit info
    const currentLimit = rateLimitMap.get(clientIP);
    const remaining = Math.max(0, RATE_LIMIT_MAX_REQUESTS - (currentLimit?.count || 0));
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully!',
        id: data.id 
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': (currentLimit?.resetTime || Date.now()).toString()
        }
      }
    );
    
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000); // Clean up every 5 minutes