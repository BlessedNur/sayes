'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Button from '../ui/Button';

export default function HeroSection(): JSX.Element {
  return (
    <section
      className="w-full relative min-h-screen"
      style={{
        backgroundImage: "url('/images/img_soccergameconcept_1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <video
        src="/new/Video.mp4"
        autoPlay
        loop
        muted // Required for autoplay in most browsers
        playsInline
        className="absolute top-0 left-0 w-[100%] h-screen  object-cover rounded-[5px]"
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(177deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.3) 50%, rgba(153,153,153,0.4) 100%)',
        }}
      />
      <div className="relative z-10 w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between min-h-screen w-full gap-[30px] sm:gap-[40px] md:gap-[60px]">
            {/* Header */}
            <div className="w-full border-b border-white">
              <Header />
            </div>

            {/* Hero Content */}
            <div className="flex flex-col justify-center items-center flex-1 px-4 sm:px-0">
              <div>
                <h1 className="text-[30px] sm:text-[45px] md:text-[60px]  font-extrabold  text-[#ffffff] flex flex-col-reverse mb-4 sm:mb-6 md:mb-8 font-inter text-center">
                  Where Smart Training Meets <br /> Relentless and Consistent Drive
                </h1>
                <p className='text-center font-semibold text-white text-2xl font-inter'>Redefine your athletic performance with pro-level programs <br /> progress tracking and expert coaching</p>
              </div>
              <div className='m-5 flex gap-5'>
                <button type="button" className="font-inter flex items-center ant-btn css-16dneet ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-lg bg-yellow-300 text-black font-medium px-8 py-3 h-12  border-none shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200">
                  <span>See Packages</span>
                  <span role="img" aria-label="arrow-right" className="anticon anticon-arrow-right ml-2">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z">
                      </path></svg></span>
                </button>
                <button type="button" className="font-inter ant-btn css-16dneet ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-lg font-medium px-8 py-3 h-12 border-2 shadow-lg hover:scale-105 transition-all duration-200 bg-transparent text-yellow-300 border-yellow-300 hover:bg-yellow-300 hover:text-black">
                  <span>Get More Info</span>
                </button>
              </div>
            </div>

            {/* Bottom Navigation
            <div className="flex  sm:flex-row border-t border-white py-[16px] sm:py-[20px] justify-between items-center sm:items-start w-full gap-4 sm:gap-0">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-medium leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[26px] text-[#ffffff] text-center sm:text-left font-inter">
                The perfect Foundation
                <br />
                Awaits You!
              </p>
              <Link
                href="#contact"
                className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[20px] sm:leading-[22px] md:leading-[25px] lg:leading-[30px] text-[#ffffff] hover:text-yellow-400 transition-colors  bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg sm:bg-transparent sm:px-0 sm:py-0 font-inter"
              >
                Contact Us
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
