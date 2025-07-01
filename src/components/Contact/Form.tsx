'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
}

interface APIResponse {
  success?: boolean;
  message?: string;
  error?: string;
  resetTime?: string;
  id?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [transmissionStatus, setTransmissionStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'loading' | 'success' | 'error'>('loading');
  const [validationErrors, setValidationErrors] = useState<Partial<FormData>>({});
  
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === formRef.current) {
            setIsFormVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length > 255) {
      errors.name = 'Name must be less than 255 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 255) {
      errors.email = 'Email must be less than 255 characters';
    }
    
    if (formData.subject.length > 500) {
      errors.subject = 'Subject must be less than 500 characters';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 10000) {
      errors.message = 'Message must be less than 10,000 characters';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error for this field
    if (validationErrors[name as keyof FormData]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setTransmissionStatus('Please fix the errors below');
      setStatusType('error');
      return;
    }
    
    setIsSubmitting(true);
    setTransmissionStatus('Sending message...');
    setStatusType('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data: APIResponse = await response.json();
      
      if (response.ok && data.success) {
        setTransmissionStatus(data.message || 'Message sent successfully!');
        setStatusType('success');
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setValidationErrors({});
      } else {
        // Handle different error types
        if (response.status === 429) {
          const resetTime = data.resetTime ? new Date(data.resetTime).toLocaleTimeString() : '';
          setTransmissionStatus(
            `Rate limit exceeded. Please try again ${resetTime ? `after ${resetTime}` : 'later'}.`
          );
        } else {
          setTransmissionStatus(data.error || 'Failed to send message. Please try again.');
        }
        setStatusType('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setTransmissionStatus('Network error. Please check your connection and try again.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setTransmissionStatus(null);
      }, 5000);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div 
      ref={formRef}
      className={`transition-all duration-1000 ${
        isFormVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8'
      } ${className}`}
    >
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
        <div className="flex items-center gap-3 mb-6">
          <Send className="w-6 h-6 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">Send a Message</h3>
        </div>

        {/* Status Message */}
        {transmissionStatus && (
          <div className={`mb-6 p-4 rounded-xl border ${
            statusType === 'success' 
              ? 'bg-emerald-400/10 border-emerald-400/20' 
              : statusType === 'error'
              ? 'bg-red-400/10 border-red-400/20'
              : 'bg-cyan-400/10 border-cyan-400/20'
          }`}>
            <div className="flex items-center gap-3">
              {isSubmitting && statusType === 'loading' && (
                <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              )}
              <span className={`text-sm font-medium ${
                statusType === 'success' 
                  ? 'text-emerald-300' 
                  : statusType === 'error'
                  ? 'text-red-300'
                  : 'text-cyan-300'
              }`}>
                {transmissionStatus}
              </span>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-slate-300 font-medium mb-2 text-sm">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 ${
                  validationErrors.name ? 'border-red-400' : 'border-white/20'
                }`}
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
              {validationErrors.name && (
                <p className="text-red-300 text-xs mt-1">{validationErrors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-slate-300 font-medium mb-2 text-sm">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 ${
                  validationErrors.email ? 'border-red-400' : 'border-white/20'
                }`}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
              {validationErrors.email && (
                <p className="text-red-300 text-xs mt-1">{validationErrors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-slate-300 font-medium mb-2 text-sm">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 ${
                validationErrors.subject ? 'border-red-400' : 'border-white/20'
              }`}
              placeholder="Project inquiry, collaboration, etc."
              disabled={isSubmitting}
            />
            {validationErrors.subject && (
              <p className="text-red-300 text-xs mt-1">{validationErrors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-slate-300 font-medium mb-2 text-sm">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 resize-none ${
                validationErrors.message ? 'border-red-400' : 'border-white/20'
              }`}
              placeholder="Tell me about your project, timeline, requirements, or any questions you have..."
              required
              disabled={isSubmitting}
            ></textarea>
            {validationErrors.message && (
              <p className="text-red-300 text-xs mt-1">{validationErrors.message}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !isFormValid}
            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}