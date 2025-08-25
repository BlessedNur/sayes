'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { packages } from '@/app/data/package';

export default function PackagesSection(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section className="w-full py-[40px] sm:py-[60px] md:py-[80px]" id='packages'>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center w-full">
          <h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[73px] text-[#120088] text-center mb-4 sm:mb-6 md:mb-[16px] font-inter">
            Our Packages
          </h2>
          <p className="text-[18px] sm:text-[22px] md:text-[28px] font-medium leading-[22px] sm:leading-[27px] md:leading-[33px] text-[#3c3c3c] text-center mb-[39px] sm:mb-[58px] md:mb-[78px] font-inter">
            Train smarter with personalized fitness plans
            <br />
             induvidually or in small groups
          </p>

          {/* Mobile Layout (flex-col, no Swiper) */}
          <div className="flex flex-col gap-8 w-full md:hidden">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative w-full h-[314px] overflow-hidden cursor-pointer rounded-lg shadow-lg ${
                  pkg.type === 'membership' ? 'bg-[#151515]' : ''
                }`}
              >
                {/* Always show image and hover content for mobile */}
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120088]/80 via-[#050022]/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start h-full justify-end">
                  <h3 className="text-[18px] sm:text-[22px] font-bold leading-[22px] sm:leading-[26px] text-[#ffffff] mb-1 font-inter">
                    {pkg.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] font-bold leading-[16px] sm:leading-[18px] text-[#ff2323] mb-2 font-inter">
                    {pkg.price}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src="/images/img_arrow_1_white_a700.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-[16px] h-[16px]"
                    />
                    <span className="text-[14px] sm:text-[16px] font-medium leading-[16px] sm:leading-[18px] text-[#ffffff] font-inter">
                      View Details
                    </span>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="!rounded-[0px] w-full"
                    onClick={() => router.push(`/booking/${pkg.id}`)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Swiper Carousel for screens md (768px) and above */}
          <div className="w-full hidden md:block">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              navigation={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 38,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 38,
                },
              }}
              className="packages-swiper"
            >
              {packages.map((pkg) => (
                <SwiperSlide key={pkg.id}>
                  <div
                    className={`relative w-full h-[314px] sm:h-[300px] md:h-[428px] overflow-hidden cursor-pointer rounded-lg shadow-lg ${
                      pkg.type === 'membership' ? 'bg-[#151515]' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(pkg.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* All cards show image initially */}
                    <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />

                    {/* Blue gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120088]/80 via-[#050022]/50 to-transparent" />

                    {/* Initial content overlay - visible by default, hidden on hover */}
                    <AnimatePresence>
                      {hoveredCard !== pkg.id && (
                        <motion.div
                          className="absolute bottom-4 left-4 right-4 z-10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-bold leading-[22px] sm:leading-[26px] md:leading-[32px] text-[#ffffff] mb-1 font-inter">
                            {pkg.title}
                          </h3>
                          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-[16px] sm:leading-[18px] md:leading-[20px] text-[#ff2323] mb-2 font-inter">
                            {pkg.price}
                          </p>
                          <div className="flex items-center gap-2">
                            <Image
                              src="/images/img_arrow_1_white_a700.svg"
                              alt=""
                              width={16}
                              height={16}
                              className="w-[16px] h-[16px]"
                            />
                            <span className="text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[16px] sm:leading-[18px] md:leading-[20px] text-[#ffffff] font-inter">
                              View Details
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Circular Reveal Overlay for hover effect */}
                    <AnimatePresence>
                      {hoveredCard === pkg.id && (
                        <motion.div
                          className="absolute inset-0 bg-[#151515]"
                          initial={{ clipPath: 'circle(0% at 100% 100%)' }}
                          animate={{ clipPath: 'circle(150% at 100% 100%)' }}
                          exit={{ clipPath: 'circle(0% at 100% 100%)' }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                        >
                          <motion.div
                            className="flex flex-col justify-start items-start p-4 h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-bold leading-[22px] sm:leading-[26px] md:leading-[32px] text-[#ffffff] mb-2 sm:mb-3 md:mb-4 font-inter">
                              {pkg.title}
                            </h3>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[20px] sm:leading-[22px] md:leading-[24px] text-[#ff2323] mb-3 sm:mb-4 md:mb-6 font-inter">
                              {pkg.price}
                            </p>

                            {/* Features List */}
                            <div className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] w-full mb-4 sm:mb-6 md:mb-8">
                              {pkg.features.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  className="flex flex-row justify-start items-center w-full"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                >
                                  <Image
                                    src="/images/img_frame_white_a700.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="w-[16px] h-[16px] flex-shrink-0"
                                  />
                                  <span className="text-[12px] sm:text-[13px] md:text-[14px] font-medium leading-[14px] sm:leading-[16px] md:leading-[18px] text-[#ffffff] ml-2 font-inter">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.6 }}
                              className="w-full mt-auto"
                            >
                              <Button
                                variant="secondary"
                                size="sm"
                                className="!rounded-[0px] w-full"
                                onClick={() => router.push(`/booking/${pkg.id}`)}
                              >
                                Book Now
                              </Button>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .packages-swiper {
          padding-bottom: 40px;
        }

        .packages-swiper .swiper-button-next,
        .packages-swiper .swiper-button-prev {
          color: #120088;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .packages-swiper .swiper-button-next:after,
        .packages-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        .packages-swiper .swiper-pagination-bullet {
          background: #120088;
          opacity: 0.3;
        }

        .packages-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}