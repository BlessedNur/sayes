import React from 'react';
import { Inter } from 'next/font/google';
import '../styles/index.css';
import { ContactSection } from '@/components/sections';
import Header from '@/components/common/Header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Sayes Performance',
  description: 'Performance Coaching & Training',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter">
        {/* Header */}
        <div className="w-full border-b border-white">
          <Header />
        </div>
        {children}
        <ContactSection />

        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbusysapp2597back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
        ></script>
      </body>
    </html>
  );
}
