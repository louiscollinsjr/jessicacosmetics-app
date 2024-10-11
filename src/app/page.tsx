'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import HomeHero from './components/HomeHero';
import Blank from './components/Blank';

const LongBackgroundImage = ({ src, alt }) => {
  const [contentHeight, setContentHeight] = useState('100%');

  useEffect(() => {
    const updateContentHeight = () => {
      // Get the height of the main content
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        setContentHeight(`${mainContent.offsetHeight}px`);
      }
    };

    // Set initial height
    updateContentHeight();

    // Update height on resize
    window.addEventListener('resize', updateContentHeight);

    // Cleanup
    return () => window.removeEventListener('resize', updateContentHeight);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1460px' }}>
      <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30" />
    </div>
  );
};

export default function Home() {
  return (
    <div className='@container'>
    <div className="relative">
      <LongBackgroundImage 
        src="/images/hero03.png"
        alt="Long background image"
      />
     <HomeHero />
     <Blank />

    </div>
    </div>
  );
}

// 'use client'; // Add this if you are using Client Components features within this component

// import Image from 'next/image';
// import jcBackground from '../../public/images/3cdac99b-cb71-41b9-a80f-06dc58318154_color.jpg';

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 relative h-[12960px]">
//       {/* Make the container relative for positioning */}

//       <Image
//         src={jcBackground}
//         alt="Background image"
//         layout="fill" // Fill the entire container
//         objectFit="fill"
//         quality={100} // Adjust quality as needed
//         priority // Prioritize loading this image
//       />
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transpent opacity-10"></div>

//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
//         {/* Ensure content is on top with z-index */}
//         <h1>Welcome to My Next.js App!</h1>
//         <p>This is the home page content.</p>
//       </main>
//     </div>
//   );
// }
