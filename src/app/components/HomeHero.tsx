'use client'
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import ComingSoon from './ComingSoon';


const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: "swap",
});

export default function HomeHero() {
  return (
    <section className="@container container mx-auto lg:max-w-screen-lg relative h-screen">
      <ComingSoon />
      {/* <div className="absolute bottom-0 right-0 p-8 z-10">
        <h1
          className={`text-8xl font-normal mb-4 text-black ${playfairDisplay.className}`}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <span>Frumoasă,</span>
            <span>Naturală,</span>
            <span>Tu.</span>

          </div>
        </h1>
        <Link href="/shop/cool-pastels" className=" inline-block mt-4 px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 text-right">
          Shop Pastels Colours
        </Link>
      </div> */}
    </section>
  );
}
