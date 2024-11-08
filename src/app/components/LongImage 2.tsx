'use client'
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface LongBackgroundImageProps {
  src: string;
  alt: string;
}

export default function LongBackgroundImage({ src, alt }: LongBackgroundImageProps) {
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
      <div className="grayscal" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1460px' }}>
        <Image
            src={src}
            alt={alt}
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            fill={true}
            priority
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30" />
      </div>
    );
  };
  