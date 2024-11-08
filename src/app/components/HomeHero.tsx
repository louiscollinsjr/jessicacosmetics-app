'use client'
import { Playfair_Display } from 'next/font/google';
import ComingSoon from './ComingSoon';
import { Dictionary } from '@/types/dictionary';
import React, { useState, useEffect } from 'react';

interface HomeHeroProps {
  dictionary: Dictionary;
}

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: "swap",
});




export default function HomeHero({ dictionary }: HomeHeroProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="@container container mx-auto lg:max-w-screen-lg relative min-h-screen">
      <ComingSoon dictionary={dictionary} />
    </section>
  );

}
