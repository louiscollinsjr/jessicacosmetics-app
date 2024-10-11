'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, ShoppingCart, Search, User } from 'lucide-react'


// Define the color scheme type
type ColorScheme = {
  primary: string
  secondary: string
  accent: string
  text: string
  textHover: string
}

// Define the props for the MegaMenu component
type MegaMenuProps = {
  colorScheme?: ColorScheme
}

// Updated menu data structure with descriptions
const menuData = [
  {
    eyebrow: 'Colours',
    title: 'JESSICA® Colours',
    description: 'Exclusively Formulated to the highest industry standards, JESSICA polish stays on. Rich and smooth, with an extraordinary depth of colour.',
    items: [
        { name: 'Colours', href: '/electronics', 
          subitems: [
            { name: 'Custom Nail Colours', href: '/electronics' },
            { name: 'Phenon Vivid Colours', href: '/clothing' },
            { name: 'Gelertion Colours', href: '/books' },
          ]
  }, { name: 'BioPure', href: '/electronics', 
    subitems: [
        { name: 'BioPure Colours', href: '/clothing' },
                { name: 'BioPure Removers', href: '/clothing' },
                { name: 'BioPure Topcoats', href: '/clothing' },
                { name: 'BioPure Basecoats', href: '/clothing' },
    ]
},], },
  {
    eyebrow: 'Care',
    title: 'Nail Treatments',
    description: 'Nothing beats the beauty of natural, well-cultivated nails. Start with a healthy foundation using basic nail care. JESSICA Hand and Cuticle Care helps build strong, healthy hands and nails.',
    items: [
      { name: 'Hand & Cuticle Care', href: '/electronics', 
        subitems: [
            { name: 'Hydration and Exfoliants', href: '/clothing' },
            { name: 'Polish Removal & Cleaning', href: '/electronics' },
            { name: 'JESSICA® bodytreats', href: '/clothing' },
        ]
      },
      { name: 'Top & Base Coats', href: '/electronics', 
        subitems: [
            { name: 'Topcoats', href: '/clothing' },
            { name: 'Basecoats', href: '/clothing' },
            { name: 'Nail Kits', href: '/electronics' },
        ]
      },
    ],
  },
  {
    title: 'ZenSpa Pedicure',
    description: 'Start your ZenSpa journey with personalized foot treatments that refresh your mind, body, and soul. Our advanced pedicure system cleanses, exfoliates, and rejuvenates your skin, leaving it softer and healthier.',
    items: [
        { name: 'ZenSpa Pedicure', href: '/electronics', 
            subitems: [
                { name: 'ZenSpa Pedicure Treatments', href: '/clothing' },
                { name: 'ZenSpa Starter Kit', href: '/clothing' },
            ]
          },
    ],
  },
  {
    title: 'Accessories',
    description: 'Tools and accessories for the nail professional.',
    items: [
        { name: 'Accessories', href: '/electronics', 
            subitems: [
                { name: 'Files', href: '/clothing' },
                { name: 'Brushes', href: '/clothing' },
                { name: 'Beyond Clean Sanitaizing Spray', href: '/clothing' },
            ]
          },
    ],
  },
//   {
//     title: 'BioPure',
//     description: ' 24 Beautiful New Colors, Base Coat, Top Coat, Remover derived from all-natural, bio-sourced ingredients.',
//     items: [
//         { name: 'BioPure Colours', href: '/clothing' },
//                 { name: 'BioPure Removers', href: '/clothing' },
//                 { name: 'BioPure Topcoats', href: '/clothing' },
//                 { name: 'BioPure Basecoats', href: '/clothing' },
//     ],
//   },
]

export default function MegaMenu({ colorScheme = {
  primary: 'bg-black',
  secondary: 'bg-black',
  accent: 'border-gray-700',
  text: 'text-gray-300',
  textHover: 'text-white',
} }: MegaMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Function to toggle sub-menu
  const toggleSubMenu = (title: string | null) => {
    setActiveMenu(title)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      setScrollPosition(currentScrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Dynamic styles based on the color scheme
  const styles = {
    header: `${colorScheme.primary} ${colorScheme.text}`,
    menuItem: `hover:${colorScheme.textHover}`,
    subMenu: `${colorScheme.primary} ${colorScheme.accent}`,
    mobileMenu: `${colorScheme.primary} ${colorScheme.text}`,
  }
  const announcementHeight = 40 // Adjust based on your actual announcement height
  //const showAnnouncement = scrollPosition < announcementHeight

  return (
    <>
    {showAnnouncement && (
      <div 
        className="bg-gray-200 text-black py-2 text-center text-sm font-thin fixed top-0 left-0 right-0 z-50"
        style={{ transform: `translateY(-${scrollPosition}px)` }}
      >
        <div className="container mx-auto px-4 flex justify-center items-center">
          <span>Elevate your salon services with JESSICA's trusted products. Contact us today to learn how to bring JESSICA to your salon!</span>
          <button onClick={() => setShowAnnouncement(false)} className="text-white hover:text-gray-200 p-1 bg-slate-300 rounded ml-4">
            <X className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
    )}

    <header 
      className={`${styles.header} fixed left-0 right-0 z-40 backdrop-filter backdrop-blur-lg md:bg-opacity-99 text-xs tracking-widest`}
      style={{ 
        top: showAnnouncement ? `${Math.max(announcementHeight - scrollPosition, 0)}px` : '0',
        transition: 'top 0.0s ease-out'
      }}
    >
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-xs">
          JessicaCosmetics.ro
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center space-x-8 flex-grow fixed top-0 left-0 right-0 z-60">
          {menuData.map((section) => (
            <div key={section.title} className="relative group">
              <button
                className={`${styles.menuItem} px-3 py-2 rounded-md transition duration-600 flex items-center`}
                onMouseEnter={() => toggleSubMenu(section.title)}
                onMouseLeave={() => toggleSubMenu(null)}
              >
                {section.title}
                {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
              </button>
            </div>
          ))}
          <button className={`${styles.menuItem} transition-colors duration-200`}>
            <Search className="h-4 w-4" />
          </button>
          <button className={`${styles.menuItem} transition-colors duration-200`}>
            <ShoppingCart className="h-4 w-4" />
          </button>
          <button className={`${styles.menuItem} transition-colors duration-200`}>
            <User className="h-4 w-4" />    
            </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button className={`${styles.menuItem} transition-colors duration-200`}>
            <Search className="h-4 w-4" />
          </button>
          <button className={`${styles.menuItem} transition-colors duration-200`}>
            <ShoppingCart className="h-4 w-4" />
          </button>
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Submenu */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          activeMenu ? 'max-h-96 opacity-100 h-44' : 'max-h-0 opacity-0'
        }`}
        onMouseEnter={() => activeMenu && toggleSubMenu(activeMenu)}
        onMouseLeave={() => toggleSubMenu(null)}
      >
        <div className={`${styles.subMenu} w-full`}>
          {menuData.map((section) => (
            activeMenu === section.title && (
              <div key={section.title} className="container mx-auto px-4 py-6 flex">
                <div className="w-1/3 pr-8">
                  <p className="text-xs text-gray-500">{section.eyebrow}</p>
                  <h2 className="text-lg font-semibold mb-">{section.title}</h2>
                  <p className="text-xs text-gray-400 pr-4">{section.description}</p>
                </div>
                <ul className="w-2/3 grid grid-cols-3 gap-4">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`${styles.menuItem} block px-4 transition duration-300 text-xs text-semibold mb-2 text-gray-500`}
                      >
                        {item.name}
                      </Link>
                      {'subitems' in item && item.subitems && item.subitems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`${styles.menuItem} block px-4 transition duration-300 text-xs text-gray-300 mb-2`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`${styles.mobileMenu} md:hidden ${showAnnouncement ? 'mt-10' : ''}`}>
          {menuData.map((section) => (
            <div key={section.title} className="border-b border-gray-700">
              <button
                className="w-full px-4 py-2 flex justify-between items-center"
                onClick={() => toggleSubMenu(activeMenu === section.title ? null : section.title)}
              >
                {section.title}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === section.title ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeMenu === section.title ? 'max-h-46 o4acity-100' : 'max-h-4 op4city-0'
                }`}
              >
                <div className="px-4 py-2">
                  <p className="text-sm mb-2">{section.description}</p>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`${styles.menuItem} block py-2 transition duration-300`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </header>
    </>
  )
}

