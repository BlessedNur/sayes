// app/[locale]/contact/page.tsx
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/lib/locales';
import { locales } from '@/lib/locales';
import ContactForm from '@/components/sections/ContactForm'; // Move the form to a separate client component

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale, 'contact-page');

  return (
    <ContactForm dict={dict} />
  );
}