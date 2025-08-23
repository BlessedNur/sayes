'use client';

import React, { useState } from 'react';
import { User, Zap, Users, Award, X } from 'lucide-react';

// Define the detailed data for each service card, including a description.
const services = [
  {
    title: 'Personal Coaching',
    icon: <User className="w-6 h-6" />,
    description: 'Our Personal coaching sessions with our coaches deliver customized workout plans, one-on-one coaching, and training guidance tailored to your goals. We help you track your progress through the regular meetings, receive ongoing accountability, and tap into expert support every step of the way. Ready to transform? Book your free assessment today and start your journey to peak performance!',
  },
  {
    title: 'Skill Development',
    icon: <Zap className="w-6 h-6" />,
    description: 'Our Skill Development programs are part of some of our packages where we help to sharpen your athletic toolkit with targeted drills, mental performance coaching, and technique breakdowns tailored to your sport. Gain mastery in agility, reaction time, speed and explosiveness. Ready to elevate your game? Book your free assessment today and start your journey to peak performance!',
  },
  {
    title: 'Group Training',
    icon: <Users className="w-6 h-6" />,
    description: 'Our Small Group Training pairs expert coaching with the team spirit of a tight team. In groups of 4-6, you’ll tackle sport-specific circuits, exercise techniques, and goal-driven workouts designed to help you become a better athlete. Enjoy personalized feedback, friendly competition, and a supportive atmosphere. Join our group sessions and level up together—reserve your spot now!',
  },
  {
    title: 'Training Camps',
    icon: <Award className="w-6 h-6" />,
    description: 'Our Training Camps are high-intensity, multi-day experiences built to improve your athletic growth. Designed for youth and competitive athletes, each camp focuses on advanced skill development, physical conditioning, mental performance, and tactical training - all led by elite coaches. With video feedback, team challenges, and individual assessments, athletes leave stronger, smarter, and more confident. Stay tuned for our upcoming training camps.',
  },
];

// Reusable component for a single service card.
const ServiceCard = ({ title, icon, onClick }: { title: string; icon: React.ReactNode; onClick: () => void }) => {
  return (
    <div
      className="p-6 rounded-xl border border-gray-700 text-center
                 hover:border-[#4ef5ff] hover:shadow-lg hover:bg-[#2a2847]
                 transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center
                      mx-auto mb-4 text-[#4ef5ff] text-xl bg-[#2a2847]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    </div>
  );
};

// Component for the pop-up modal.
const ServiceModal = ({ service, onClose }: { service: typeof services[0]; onClose: () => void }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-[#1a1a2e] text-white p-8 md:p-12 rounded-xl border border-gray-700 max-w-lg md:max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#4ef5ff] bg-[#2a2847]">
            {React.cloneElement(service.icon as React.ReactElement, { className: 'w-8 h-8' })}
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">{service.title}</h2>
        </div>
        <p className="text-gray-300 text-base leading-relaxed text-center">{service.description}</p>
      </div>
    </div>
  );
};

// The main component that renders the entire section.
export default function ServiceSection(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleOpenModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section className="px-4 md:px-6 py-16 rounded-2xl shadow-xl border max-w-7xl mx-auto bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border-gray-700 mb-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-[#4ef5ff] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              onClick={() => handleOpenModal(service)}
            />
          ))}
        </div>
      </section>

      {isModalOpen && selectedService && (
        <ServiceModal service={selectedService} onClose={handleCloseModal} />
      )}
    </>
  );
}
