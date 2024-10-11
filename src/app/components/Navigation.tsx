'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavTextColor = () => {
    switch (pathname) {
      case '/':
        return 'text-white';
      case '/about':
        return 'text-white';
      default:
        return 'text-black';
    }
  };
  
 

  return (
    <nav className="md:h-auto fixed top-0 left-0 right-0 z-50 @container sm:bg-black  ${getNavTextColor()}`} backdrop-filter backdrop-blur-lg md:bg-opacity-90 w-full">
        <div className=" w-full justify-center items-center bg-blue-600 py-2">
        <p className=' text-white text-center font-thin text-sm tracking'> Free Shipping on orders over $50</p>
        </div>
      <div className="@sm:max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-xs font-light tracking-wider uppercase ${getNavTextColor()}`} aria-label="Home">
              jessica cosmetics
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden @[640px]:flex items-center space-x-4">
            <li>
              <Link href="/" className={`hover:text-gray-800 text-xs ${getNavTextColor()}`} aria-label="Home">Home</Link>
            </li>
            <li>
              <Link href="/products" className={`hover:text-gray-800 text-xs ${getNavTextColor()}`} aria-label="Products">Products</Link>
            </li>
            <li>
              <Link href="/" aria-label="Search" className={`hover:text-gray-800 ${getNavTextColor()}`}>
                <Search className="h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link href="/" aria-label="Cart" className={`hover:text-gray-800 ${getNavTextColor()}`}>
                <ShoppingCart className="h-4 w-4" />
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="@[640px]:hidden">
            <button
              onClick={toggleMenu}
              className={`${getNavTextColor()} hover:text-gray-200 focus:outline-none`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="@[640px]:hidden bg-black">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            <li>
              <Link href="/" className={`block hover:text-gray-200 text-sm ${getNavTextColor()} py-2`} aria-label="Home">Home</Link>
            </li>
            <li>
              <Link href="/products" className={`block hover:text-gray-200 text-sm ${getNavTextColor()} py-2`} aria-label="Products">Products</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}