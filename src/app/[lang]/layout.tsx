// app/[lang]/layout.tsx
import '../../app/globals.css';
import React from 'react';
import MegaMenu from '../components/NavigationMegaMenu';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JESSICA® Comentics - România",
  description: "JESSICA® Comentics - România",
};

interface LangParams {
  lang: string;
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ro" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LangParams;
}) {
  
  const { lang } = await params; // Await params here
 // const lang = await params.lang;

  return (
    <html lang={lang}>
      <body>
        <MegaMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
