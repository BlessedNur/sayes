'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function WhatWeOfferSection(): JSX.Element {
  const [activeOption, setActiveOption] = useState('personal-coaching');
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastManualSelection, setLastManualSelection] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const options = [
    {
      id: 'personal-coaching',
      title: 'Personal Coaching',
      image: '/new/offer1.jpg',
      description:
        'Our Personal coaching sessions with our coaches deliver customized workout plans, one-on-one coaching, and training guidance tailored to your goals. We help you track your progress through the regular meetings, receive ongoing accountability, and tap into expert support every step of the way Ready to transform? Book your free assessment today and start your journey to peak performance!',
    },
    {
      id: 'skill-development',
      title: 'Skill Development',
      image: '/new/offer3.jpg',
      description:
        'Our Skill Development programs are part of some of our packages where we help to sharpen your athletic toolkit with targeted drills, mental performance coaching, and technique breakdowns tailored to your sport. Gain mastery in agility, reaction time, speed and explosiveness Ready to elevate your game? Book your free assessment today and start your journey to peak performance!..',
    },
    {
      id: 'group-training',
      title: 'Group Training',
      image: '/new/offer4.jpg',
      description:
        'Our Small Group Training pairs expert coaching with the team spirit of a tight team. In groups of 4-6, you’ll tackle sport-specific circuits, exercise techniques, and goal-driven workouts designed to help you become a better athlete. Enjoy personalized feedback, friendly competition, and a supportive atmosphere. Join our group sessions and level up together—reserve your spot now!',
    },
    {
      id: 'training-camps',
      title: 'Training Camps',
      image: '/new/offer5.jpg',
      description:
        'Our Training Camps are high-intensity, multi-day experiences built to improve your athletic growth. Designed for youth and competitive athletes, each camp focuses on advanced skill development, physical conditioning, mental performance, and tactical training - all led by elite coaches. With video feedback, team challenges, and individual assessments, athletes leave stronger, smarter, and more confident Stay tuned for our upcoming training camps..',
    },
  ];

  const currentOption = options.find((option) => option.id === activeOption) || options[0];
  
  // Use a state to track screen width
  const [isMobile, setIsMobile] = useState(false);

  // Hook to handle window resize and determine mobile status
  useEffect(() => {
    const handleResize = () => {
      // 800px is the breakpoint for this responsive behavior
      setIsMobile(window.innerWidth <= 800);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll detection logic only for non-mobile views
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile || !sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        if (scrollY + windowHeight - sectionTop < 100) {
          setLastManualSelection(null);
        }
        const sectionScrollProgress = (scrollY + windowHeight - sectionTop) / sectionHeight;
        const optionIndex = Math.min(
          Math.floor(sectionScrollProgress * options.length),
          options.length - 1
        );

        if (optionIndex >= 0 && optionIndex < options.length) {
          const targetOptionId = options[optionIndex].id;
          if (lastManualSelection) {
            const manualIndex = options.findIndex((opt) => opt.id === lastManualSelection);
            if (optionIndex >= manualIndex) {
              if (!isAnimating && targetOptionId !== activeOption) {
                setIsAnimating(true);
                setActiveOption(targetOptionId);
                setTimeout(() => setIsAnimating(false), 700);
              }
            }
          } else {
            if (!isAnimating && targetOptionId !== activeOption) {
              setIsAnimating(true);
              setActiveOption(targetOptionId);
              setTimeout(() => setIsAnimating(false), 700);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, options, lastManualSelection, activeOption, isAnimating]);

  const handleOptionClick = (id: string) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveOption(id);
      setLastManualSelection(id);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#f7f7f7] py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full content display for screens up to 800px */}
        {isMobile ? (
          <div className="flex flex-col gap-12">
            <h2 className="text-[26px] sm:text-[34px] font-bold leading-[31px] sm:leading-[41px] text-[#120088] font-inter text-center">
              What we Offer
            </h2>
            {options.map((option) => (
              <div key={option.id} className="flex flex-col gap-6 items-center w-full">
                <h3 className="text-[22px] sm:text-[28px] font-bold leading-[26px] sm:leading-[34px] text-[#120088] font-inter text-center">
                  {option.title}
                </h3>
                <div className="w-full h-auto rounded-[15px] overflow-hidden shadow-lg">
                  <Image
                    src={option.image}
                    alt={option.title}
                    width={816}
                    height={434}
                    className="w-full h-auto rounded-[15px]"
                  />
                </div>
                <p className="text-[14px] sm:text-[16px] font-medium text-[#3c3c3c] font-inter">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* Interactive display for screens above 800px */
          <div className="flex flex-col lg:flex-row justify-center items-start w-full">
            <div className="flex flex-col gap-[22px] sm:gap-[33px] md:gap-[44px] justify-start items-start w-full lg:w-[44%] mt-0 lg:mt-[20px] mb-8 lg:mb-0">
              <h2 className="hidden lg:block text-[26px] sm:text-[34px] md:text-[42px] font-bold leading-[31px] sm:leading-[41px] md:leading-[51px] text-[#120088] font-inter">
                What we Offer
              </h2>
              <div
                ref={optionsRef}
                className="flex flex-col gap-[27px] sm:gap-[40px] md:gap-[54px] justify-start items-center w-full px-4 sm:px-6 lg:px-[26px]"
              >
                {options.map((option) => (
                  <div
                    key={option.id}
                    className={`flex flex-row justify-start items-end w-full cursor-pointer transition-all duration-500 ease-in-out hover:opacity-80 transform lg:hover:translate-x-2 ${
                      activeOption === option.id ? 'opacity-100 items-center' : 'opacity-60'
                    }`}
                    onClick={() => handleOptionClick(option.id)}
                  >
                    <div
                      className={`w-[11px] sm:w-[16px] md:w-[22px] h-[1px] bg-[#120088] transition-all duration-500 ${
                        activeOption === option.id
                          ? 'w-[22px] sm:w-[28px] md:w-[35px] '
                          : 'mb-[8px] sm:mb-[12px] md:mb-[16px]'
                      }`}
                    />
                    <span
                      className={`font-medium leading-[24px] sm:leading-[30px] md:leading-[37px] ml-3 transition-all duration-500 ease-in-out font-inter ${
                        activeOption === option.id
                          ? 'text-[22px] sm:text-[28px] md:text-[36px] leading-[26px] sm:leading-[34px] md:leading-[44px] text-[#120088]'
                          : 'text-[18px] sm:text-[22px] md:text-[26px] text-[#c7c7c7]'
                      }`}
                    >
                      {option.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[18px] justify-start items-center w-full lg:w-[54%] mt-8 lg:mt-0">
              <div
                key={`image-${activeOption}`}
                className="w-full h-auto rounded-[15px] overflow-hidden shadow-lg transform lg:hover:scale-[1.005] transition-all duration-700 ease-in-out animate-fadeInUp"
              >
                <Image
                  src={currentOption.image}
                  alt={currentOption.title}
                  width={816}
                  height={434}
                  className="w-full h-auto rounded-[15px] transition-all duration-700 ease-in-out"
                />
              </div>
              <p
                key={`description-${activeOption}`}
                className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#3c3c3c] w-full transition-all duration-700 ease-in-out font-inter animate-fadeInUp"
              >
                {currentOption.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}