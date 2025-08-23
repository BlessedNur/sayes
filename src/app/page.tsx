'use client';
import React from 'react';
import {
  HeroSection,
  PackagesSection,
  WhatWeOfferSection,
  WhyChooseSection,
  ContactSection,
} from '@/components/sections';
import { Award, User, Users, Zap } from 'lucide-react';
import ServiceSection from '@/components/sections/ServiceSection';

export default function HomePage(): JSX.Element {

  // Define the data for each service card.
  const services = [
    {
      title: 'Personal Coaching',
      icon: <User className="w-6 h-6" />,
    },
    {
      title: 'Skill Development',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Group Training',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Training Camps',
      icon: <Award className="w-6 h-6" />,
    },
  ];

  // This keeps the main component clean and follows the DRY principle.
  const ServiceCard = ({ title, icon }: { title: string; icon: React.ReactNode }) => {
    return (
      <div className="p-6 rounded-xl border border-gray-700 text-center
                    hover:border-[#4ef5ff] hover:shadow-lg hover:bg-[#2a2847]
                    transition-all duration-200 cursor-pointer">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center
                      mx-auto mb-4 text-[#4ef5ff] text-xl bg-[#2a2847]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      <HeroSection />
      <PackagesSection />
      <WhatWeOfferSection />
      <WhyChooseSection />
      <ContactSection />
    </div>
  );
}
