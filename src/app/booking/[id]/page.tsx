'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/common/Header';
import EnhancedBookingForm from '@/components/booking/BookingForm'; // Use the original component
import { ContactSection } from '@/components/sections';
import { packages } from '@/app/data/package';


export default function BookingPage(): JSX.Element {
  const params = useParams();
  const packageId = parseInt(params.id as string);
  const selectedPackage = packages.find((pkg) => pkg.id === packageId);

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h1>
            <p className="text-gray-600">The package you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full ma-w-2xl sm:p-12 lg:p-16 rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#120088] mb-8 font-inter">
          Book Your Session
        </h1>
        <EnhancedBookingForm packageTitle={selectedPackage.title} packageId={selectedPackage.id} />
      </div>
    </div>
  );
}
