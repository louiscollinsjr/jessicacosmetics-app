'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SiFacebook, SiX, SiInstagram } from '@icons-pack/react-simple-icons';
import { Wix_Madefor_Display } from 'next/font/google';
import Image from 'next/image';
import { Dictionary } from '@/types/dictionary';
import { useState } from 'react';

interface ComingSoonProps {
  dictionary: Dictionary;
}

const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function ComingSoon({ dictionary }: ComingSoonProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, isSubscribed }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact information');
      }

      // Show success message
      setSuccessMessage(dictionary.ComingSoon.successMessage); // Set success message
      setEmail(''); // Clear the form
      setIsSubscribed(false);

      // Clear success message after a delay (optional)
      setTimeout(() => setSuccessMessage(''), 5000); // Clear after 5 seconds
    } catch (error) {
      console.error(error);
      setSuccessMessage(dictionary.ComingSoon.successFailureMessage); // Show error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 w-full pt-32 md:pt-4">
      <div className="bg-white overflow-hidden w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/2 p-8 md:px-12 text-center md:text-left">
            <h1
              className={`text-4xl mb-4 text-gray-600 font-semibold tracking-wide [word-spacing:0.2rem] leading-tight ${wixMadeforDisplay.className}`}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  justifyContent: 'space-evenly',
                }}
              >
                <span className="text-center md:text-left">{dictionary.ComingSoon.headingLine1}</span>
                <span className="text-center md:text-left">{dictionary.ComingSoon.headingLine2}</span>
                <span className="text-center md:text-left">{dictionary.ComingSoon.headingLine3}</span>
              </div>
            </h1>
            <p className="text-center md:text-left text-md text-gray-500 font-light tracking-wide">
              {dictionary.ComingSoon.subheadingLine1} <br /> {dictionary.ComingSoon.subheadingLine2}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 pt-8 flex flex-col items-center md:items-start">
              <Input
                type="email"
                placeholder={dictionary.ComingSoon.inputEmailPlaceholder}
                className="w-72"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flex items-center space-x-2 pt-2 font-light">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={isSubscribed}
                  onChange={(e) => setIsSubscribed(e.target.checked)}
                />
                <label htmlFor="newsletter" className="text-xs text-gray-600">
                  {dictionary.ComingSoon.inputSubscribeToNewsLetter}
                </label>
              </div>
              <Button type="submit" className="px-16 bg-zinc-700 rounded-none">
                {dictionary.ComingSoon.inputSubmitButtonText}
              </Button>
            </form>

            {/* Success/Error Message */}
            {successMessage && (
              <p className="pt-4 text-center md:text-left text-green-600 text-xs">
                {successMessage}
              </p>
            )}

            <div className="flex justify-center md:justify-start space-x-4 pt-8">
              <a href="#" aria-label="Facebook" className="text-gray-900">
                <SiFacebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-900 hover:text-gray-500">
                <SiX size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-900 hover:text-gray-500">
                <SiInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:p-8 md:px-12 flex flex-col items-center justify-center">
            <Image
              src="/images/JessicaLogoBlack.svg"
              alt="Jessica Cosmetics International"
              width={256}
              height={256}
              className="h-96 w-96 p-0 m-0"
              priority
            />
            <Button variant="ghost" className="md:mt-2">
              ROMANIA
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}