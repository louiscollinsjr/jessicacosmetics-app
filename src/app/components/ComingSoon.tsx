import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram } from '@icons-pack/react-simple-icons';
import { Wix_Madefor_Display } from 'next/font/google';
import Image from 'next/image';

const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 w-full">
      <div className=" bg-white overflow-hidden w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/2 p-8 md:px-12">
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
                <span>Our new</span>
                <span>website is on</span>
                <span>its way.</span>
              </div>
            </h1>
            <p className="text-md text-gray-500 font-light tracking-wide">
              Sign up to be the first to know <br />
              when we launch.
            </p>

            <form className="space-y-4 pt-8">
             
              <Input
                type="email"
                placeholder="Enter your email here"
                className="w-full"
                aria-label="Email address"
              />

              <div className="flex items-center space-x-2 pt-2 font-light">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="newsletter" className="text-xs text-gray-600">
                  Yes, subscribe me to your newsletter
                </label>
              </div>
              <Button className="px-16 bg-zinc-700 rounded-none">Submit</Button>
            </form>
            <div className="flex justify-left space-x-4 pt-8">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-900"
              >
                <SiFacebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-900 hover:text-gray-500"
              >
                <SiX size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-900 hover:text-gray-500"
              >
                <SiInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 p-8 md:px-12 flex flex-col items-center justify-center">
            <Image
              src="/images/jessica-cosmetics-international-black.svg"
              alt="Jessica Cosmetics International"
              width={256}
              height={256}
              className="h-96 w-96"
              priority
            />
            <Button variant="ghost" className="mt-8">
              Romania
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
