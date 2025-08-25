// components/sections/ContactSection.tsx (remove 'use client', static content)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection({ dict }: { dict: any }): JSX.Element {
  return (
    <section
      className="w-full mt-[35px] sm:mt-[52px] md:mt-[70px]"
      style={{
        background: 'linear-gradient(180deg, #040022 0%, #120088 100%)',
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-start items-end w-full p-[50px] sm:p-[75px] md:p-[100px] rounded-[5px]">
          <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-center w-full mt-[13px] sm:mt-[19px] md:mt-[26px]">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row  justify-between items-start w-full ">
              <div className="flex flex-col justify-between items-start md:w-[70%] gap-4 sm:gap-0">
                <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-normal leading-[29px] sm:leading-[44px] md:leading-[59px] text-[#ffffff]">
                  {dict.contact_us}
                </h2>

                {/* Contact Details */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-4 mt-6 justify-start items-center w-full">
                    {/* Phone */}
                    <div className="flex flex-row justify-start items-start w-full">
                      <div className="w-[14px] sm:w-[21px] md:w-[28px] h-[1px] bg-[#ffffff] mt-[5px] sm:mt-[7px] md:mt-[10px]" />
                      <Image
                        src="/images/img_frame_yellow_a200.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] md:w-[24px] md:h-[24px] ml-2"
                      />
                      <span className="text-[16px] sm:text-[19px] md:text-[22px] font-normal leading-[19px] sm:leading-[23px] md:leading-[27px] text-[#ffffff] ">
                        +46 72 333 87 87
                      </span>
                    </div>
                    <div className="flex flex-row justify-start items-end w-full mt-[-2px] sm:mt-[-3px] md:mt-[-4px]">
                      <div className="w-[14px] sm:w-[21px] md:w-[28px] h-[1px] bg-[#ffffff] mb-[6px] sm:mb-[9px] md:mb-[12px]" />
                      <Image
                        src="/images/img_frame_yellow_a200_24x24.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] md:w-[24px] md:h-[24px] ml-2"
                      />
                      <span className="text-[16px] sm:text-[19px] md:text-[22px] font-normal leading-[19px] sm:leading-[23px] md:leading-[27px] text-[#ffffff] ">
                        info@sayesperformance.se
                      </span>
                    </div>

                    {/* Address */}
                    <div className="flex flex-row justify-start items-start w-full gap-2">
                      <div className="w-[14px] sm:w-[21px] md:w-[28px] h-[1px] bg-[#ffffff] mb-[6px] sm:mb-[9px] md:mb-[12px]" />

                      <Image
                        src="/images/img_frame_yellow_a200.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] md:w-[24px] md:h-[24px]"
                      />
                      <span className="text-[16px] sm:text-[19px] md:text-[22px] font-normal leading-[19px] sm:leading-[22px] md:leading-[26px] text-[#ffffff] ">
                        Västanforsgatan 30 A, 214 50
                        <br />
                        Malmö, Sweden
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Newsletter */}
              <div className="flex flex-col justify-between items-start md:w-[30%] md:mt-0 mt-10 gap-4 sm:gap-0">
                <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-normal leading-[29px] sm:leading-[44px] md:leading-[59px] text-[#ffffff]">
                  {dict.get_in_touch}
                </h2>
                <div className="w-full mt-4">
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[17px] sm:leading-[19px] md:leading-[21px] text-[#ffffff]">
                    {dict.latest_insights}
                    <br />
                    {dict.resources_expert}
                  </p>
                </div>
              </div>
            </div>
            {/* Email */}
            
            {/* Divider Line */}
            <div className="w-full h-[1px] bg-[#ffffff] mt-[20px]" />
            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row justify-start items-start w-full mt-[10px] sm:mt-[15px] md:mt-[20px] gap-4 sm:gap-0">
              <div className="flex items-center gap-4">
                <Link
                  href="/terms"
                  className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[17px] sm:leading-[19px] md:leading-[22px] text-[#ffffff] hover:text-yellow-400 transition-colors"
                >
                  {dict.terms_conditions}
                </Link>
                <div className="w-[1px] h-[20px] sm:h-[30px] md:h-[40px] bg-[#ffffff]" />
                <Link
                  href="/privacy"
                  className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[17px] sm:leading-[19px] md:leading-[22px] text-[#ffffff] hover:text-yellow-400 transition-colors ml-[11px] sm:ml-[16px] md:ml-[22px]"
                >
                  {dict.privacy_policy}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}