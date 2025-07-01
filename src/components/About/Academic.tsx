// components/AcademicSection.tsx
// components/AcademicSection.tsx
'use client';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { academicData } from '@/data/about';
import { AcademicRecord, Certification } from '@/types/about';
import Link from 'next/link';

function EducationCard({ education }: { education: AcademicRecord }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 relative flex-shrink-0">
          <Image
            src={education.imageUrl}
            alt={`${education.institution} logo`}
            fill
            className="object-contain rounded"
            sizes="48px"
          />
        </div>
       
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white mb-2">{education.degree}</h4>
          <p className="text-blue-400 font-medium mb-1">{education.institution}</p>
          <p className="text-gray-400 text-sm">{education.period}</p>
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <div className="mb-2 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-700/50 rounded-lg">
          <Icon icon={certification.icon} className={`w-6 h-6`} />
        </div>
       
        <div className="flex-1">
          <h4 className="text-white font-semibold text-sm">{certification.name}</h4>
          <p className="text-gray-400 text-xs">{certification.issuer}</p>
          <p className="text-gray-500 text-xs">{certification.date}</p>
            <Link
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xs mt-1 underline hover:text-blue-300 transition-colors"
            >
            View Credential
            </Link>
        </div>
      </div>
    </div>
  );
}

export default function AcademicSection() {
  return (
    <div className="space-y-12">
      {/* Education Section */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Icon icon="mdi:school" className="w-8 h-8 text-blue-400" />
          </div>
          Education
        </h3>
       
        <div className="space-y-6">
          {academicData.education.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
            />
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Icon icon="mdi:certificate" className="w-8 h-8 text-purple-400" />
          </div>
          Certifications
        </h3>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {academicData.certifications.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
       
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}