import React from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import BookingForm from '../../../../components/booking/BookingForm';
import { packages } from '@/app/data/package';
import { promises as fs } from 'fs';
import path from 'path';

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
  // Load package data from locale-specific JSON file using file system
  let packages = [];
  try {
    // Updated file path to use public/locales/<locale>/packages.json
    const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'packages.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    packages = JSON.parse(jsonData);
  } catch (error: any) {
    console.error(`Error reading package data for locale '${locale}':`, error);
    // Fallback to English if locale-specific file is not available
    try {
      const fallbackPath = path.join(process.cwd(), 'public', 'locales', 'en', 'packages.json');
      const fallbackJsonData = await fs.readFile(fallbackPath, 'utf-8');
      packages = JSON.parse(fallbackJsonData);
    } catch (fallbackError: any) {
      console.error(`Error reading fallback package data for locale 'en':`, fallbackError);
      return <p>Package data not available</p>;
    }
  }

  // Check if packages is an array; if not, check if packages.packages is an array
  if (!Array.isArray(packages)) {
    if (packages && Array.isArray(packages.packages)) {
      packages = packages.packages;
    } else {
      console.error('Packages data is not an array:', packages);
      return <p>Invalid package data</p>;
    }
  }

  const pkg = packages.find((p: { id: string | number }) => p.id.toString() === id);
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
              {pkg.features && pkg.features.length > 0 ? (
                pkg.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">{dict.no_features_available}</li>
              )}
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