// app/[locale]/layout.tsx
import '@/styles/index.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ContactSection } from '@/components/sections';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/get-dictionary';
import { locales } from '@/lib/i18n';
import Header from '@/components/common/Header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sayes Performance',
  description: 'Performance Coaching & Training',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  const commonDict = await getDictionary(locale, 'common');
  const contactDict = await getDictionary(locale, 'contact');

  return (
    <html lang={locale} className={inter.variable}>
      <body className="font-inter">
        <div className="w-full border-b border-white">
          <Header dict={commonDict} />
        </div>
        {children}
        <ContactSection dict={contactDict} />
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbusysapp2597back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
        ></script>
      </body>
    </html>
  );
}
