import React from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import { packages } from '@/app/data/package';
import BookingForm from '@/components/booking/BookingForm';

export async function generateStaticParams() {
  const paths = [];
  for (const locale of ['en', 'sv']) {
    for (const pkg of packages) {
      paths.push({ locale, id: pkg.id.toString() });
    }
  }
  return paths;
}

export default async function BookingPage({
  params,
}: {
  params: { locale: Locale; id:string };
}) {
  const { locale, id } = params;
  const dict = await getDictionary(locale, 'booking-form');
  const pkg = packages.find((p) => p.id === parseInt(id));
  console.log("Package ID:", id, "Found Package:", pkg);

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
      <div className="w-full max-w-5xl sm:p-12 lg:p-16">
        {/* Package Details Section */}
        <div className="mb-12 bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left side: Image */}
          <div className="flex items-center justify-center">
            <img src={pkg.image} alt={pkg.title} className="rounded-lg object-cover w-full h-auto max-h-96" />
          </div>
          {/* Right side: Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h2>
            <p className="text-xl font-semibold text-blue-600 mb-4">{pkg.price}</p>
            <p className="text-gray-700 mb-6">{pkg.description}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What's included:</h3>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#120088] mb-8 font-inter">
          {dict.book_your_session}
        </h1>
        <BookingForm packageTitle={pkg.title} packageId={pkg.id} dict={dict} />
      </div>
    </div>
  );
}