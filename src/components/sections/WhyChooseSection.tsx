'use client';
import React from 'react';
import Image from 'next/image';

export default function WhyChooseSection(): JSX.Element {
  return (
    <section className="w-full py-[29px] sm:py-[43px] md:py-[58px] mb-10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-start items-start w-full">
          {/* Left Image */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-[#f7f7f7] rounded-[5px] w-full h-[405px] sm:h-[605px] md:h-[810px] top-[12px]" />
            <video
              src="/new/performance.mp4"
              autoPlay
              loop
              muted // Required for autoplay in most browsers
              playsInline
              className="absolute top-0 left-0 w-[100%] h-[405px] sm:h-[605px] md:h-[810px] object-cover rounded-[5px]"
            />

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-[17px] sm:gap-[25px] md:gap-[34px] justify-start items-start w-full lg:ml-[52px] mt-0 lg:mt-[100px]">
            <h2 className="text-[30px] sm:text-[45px] md:text-[60px] font-medium leading-[36px] sm:leading-[54px] md:leading-[72px] text-[#120088] text-center lg:text-left w-full">
              Why Choose Sayes Performance?
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[17px] sm:leading-[19px] md:leading-[21px] text-[#3c3c3c] w-full lg:w-[92%]">
              At Sayes Performance, we develop and improve athletes, getting them ready for
              competition. Whether you are a young beginner or a seasoned competitor, our expert
              coaches, advanced facilities, and personalized programs are designed to unlock your
              full potential. We go beyond just fitness
            </p>

            <ul className="flex flex-col gap-[12px] sm:gap-[18px] md:gap-[24px] w-full lg:w-[90%] mr-0 lg:mr-[10px] list-none">
              <li className="flex items-start">
                <span className="min-w-[18px] sm:min-w-[22px] md:min-w-[26px] h-[2px] bg-black mt-[10px] mr-[8px]" />
                <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#3c3c3c]">
                  Age-appropriate strength & conditioning for speed, power and athletic longevity
                </span>
              </li>
              <li className="flex items-start">
                <span className="min-w-[18px] sm:min-w-[22px] md:min-w-[26px] h-[2px] bg-black mt-[10px] mr-[8px]" />
                <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#3c3c3c]">
                  Off-season training boot camps to stay sharp and gain a competitive edge
                </span>
              </li>
              <li className="flex items-start">
                <span className="min-w-[18px] sm:min-w-[22px] md:min-w-[26px] h-[2px] bg-black mt-[10px] mr-[8px]" />
                <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#3c3c3c]">
                  Endurance & stamina coaching for athletes on-site and in the field
                </span>
              </li>
              <li className="flex items-start">
                <span className="min-w-[18px] sm:min-w-[22px] md:min-w-[26px] h-[2px] bg-black mt-[10px] mr-[8px]" />
                <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#3c3c3c]">
                  Mental performance training to build focus, resilience, and confidence under
                  pressure. Train smart, Train strong, Train with purpose – at Sayes Performance.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
