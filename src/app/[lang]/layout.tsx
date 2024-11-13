// app/[lang]/layout.tsx
import '../../app/globals.css';
import React from 'react';
import MegaMenu from '../components/NavigationMegaMenu';
import { getDictionary } from '@/types/dictionary';
import Footer from '../components/Footer';

type Params = Promise<{ lang: string }>;

interface LayoutProps {
  children: React.ReactNode;
  params: Params;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;  // Await `params` before accessing `lang`
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="flex flex-col min-h-screen">
        <MegaMenu dictionary={dictionary} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}