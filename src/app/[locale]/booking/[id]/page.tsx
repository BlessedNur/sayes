import React from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import { packages } from '@/app/data/package';
import BookingForm from '@/components/booking/BookingForm';

export async function generateStaticParams() {
  const paths = [];
  for (const locale of ['en', 'sv']) {
    for (const pkg of packages) {
      paths.push({ locale, packageId: pkg.id.toString() });
    }
  }
  return paths;
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: Locale; packageId: string }>;
}) {
  const { locale, packageId } = await params;
  const dict = await getDictionary(locale, 'booking-form');
  const pkg = packages.find((p) => p.id === parseInt(packageId));

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{dict.package_not_found}</h1>
            <p className="text-gray-600">{dict.package_not_found_description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl sm:p-12 lg:p-16 rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#120088] mb-8 font-inter">
          {dict.book_your_session}
        </h1>
        <BookingForm packageTitle={pkg.title} packageId={pkg.id} dict={dict} />
      </div>
    </div>
  );
}