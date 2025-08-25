// app/[locale]/page.tsx (update to fetch multiple dicts and pass to sections)
import React from 'react';
import {
  HeroSection,
  PackagesSection,
  WhatWeOfferSection,
  WhyChooseSection,
  // ServiceSection, // If used, though not in return, perhaps add if needed
} from '@/components/sections';
import { Award, User, Users, Zap } from 'lucide-react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import { locales } from '@/lib/i18n';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const homeDict = await getDictionary(locale, 'home');
  const packagesDict = await getDictionary(locale, 'packages');
  const whatWeOfferDict = await getDictionary(locale, 'what-we-offer');
  const whyChooseDict = await getDictionary(locale, 'why-choose');
  // If ServiceSection used, add: const serviceDict = await getDictionary(locale, 'service'); or use homeDict if keys there

  // Define the data for each service card using translations (if ServiceSection is used)
  const services = [
    {
      title: homeDict.personal_coaching,
      icon: <User className="w-6 h-6" />,
    },
    {
      title: homeDict.skill_development,
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: homeDict.group_training,
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: homeDict.training_camps,
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
      <HeroSection dict={homeDict} />
      <PackagesSection dict={packagesDict} />
      <WhatWeOfferSection dict={whatWeOfferDict} />
      <WhyChooseSection dict={whyChooseDict} />
      {/* If ServiceSection is to be added: <ServiceSection dict={homeDict} /> or specific */}
    </div>
  );
}