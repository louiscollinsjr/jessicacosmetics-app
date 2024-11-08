// app/[lang]/layout.tsx
import '../../app/globals.css';
import React from 'react';
import MegaMenu from '../components/NavigationMegaMenu';
import type { Metadata } from "next";
import { getDictionary } from '@/types/dictionary';

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
      <body>
        <MegaMenu dictionary={dictionary} />
        <main>{children}</main>
      </body>
    </html>
  );
}