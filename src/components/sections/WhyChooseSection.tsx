'use client';
import React from 'react';
import Image from 'next/image';

export default function WhyChooseSection(): JSX.Element {
  return (
  <section className="w-full py-8 sm:py-12 md:py-16 mb-10">
  <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start w-full gap-10">
      
      {/* Left Image */}
      <div className="relative w-full max-w-[700px]">
        <div className="absolute inset-0 bg-[#f7f7f7] rounded-[5px] hidden lg:block top-[12px]" />
        <img
          src="https://sayesperformance.se/assets/banner-JN9Rbn98.gif"
          alt="Sayes Performance Training"
          className="w-full h-auto lg:h-[700px] object-cover rounded-[5px]"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-5 sm:gap-7 md:gap-9 justify-start items-center lg:items-start w-full">
        <h2 className="text-[26px] sm:text-[40px] md:text-[55px] font-semibold leading-tight text-[#120088] text-center lg:text-left">
          Why Choose Sayes Performance?
        </h2>

        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-[#3c3c3c] text-center lg:text-left max-w-[90%] lg:max-w-[92%]">
          At Sayes Performance, we develop and improve athletes, getting them ready for competition. 
          Whether you are a young beginner or a seasoned competitor, our expert coaches, advanced 
          facilities, and personalized programs are designed to unlock your full potential. 
          We go beyond just fitness.
        </p>

        <ul className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-[95%] lg:max-w-[90%] list-none">
          {[
            "Age-appropriate strength & conditioning for speed, power and athletic longevity",
            "Off-season training boot camps to stay sharp and gain a competitive edge",
            "Endurance & stamina coaching for athletes on-site and in the field",
            "Mental performance training to build focus, resilience, and confidence under pressure. Train smart, Train strong, Train with purpose – at Sayes Performance."
          ].map((text, idx) => (
            <li key={idx} className="flex items-start">
              <span className="min-w-[18px] sm:min-w-[22px] md:min-w-[26px] h-[2px] bg-black mt-3 mr-2" />
              <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#3c3c3c]">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>


  );
}
