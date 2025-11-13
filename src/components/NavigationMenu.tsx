'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: '/pages/ecole', label: "L'ÉCOLE", icon: '🏫' },
    { href: '/pages/formation', label: 'DEVENIR INGÉNIEUR', icon: '🎓' },
    { href: '/pages/international', label: 'INTERNATIONAL', icon: '🌍' },
    { href: '/pages/entreprises', label: 'ENTREPRISES', icon: '🏢' },
    { href: '/pages/recherche', label: 'RECHERCHE', icon: '🔬' },
    { href: '/pages/actualites', label: 'ACTUALITÉS', icon: '📰' },
    { href: '/pages/seminaires', label: 'SÉMINAIRES', icon: '🎤' },
  ];

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
        aria-expanded={isOpen}
        aria-label="Menu de navigation"
      >
        <div className="relative w-6 h-6">
          {/* Hamburger Icon Animation */}
          <span className={`absolute block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
          <span className={`absolute block h-0.5 w-full bg-white transition-all duration-300 top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
        </div>
        <span className="ml-3 text-sm font-medium">
          {isOpen ? 'Fermer' : 'Navigation'}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute top-full right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform origin-top-right z-[9999] ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}>
        
        {/* Menu Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-t-xl px-4 py-3">
          <h3 className="text-white font-semibold text-sm">Navigation SeaTech</h3>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:text-blue-600 transition-all duration-200 group"
            >
              <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="font-medium text-sm">
                {item.label}
              </span>
              <svg 
                className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 rounded-b-xl">
          <p className="text-xs text-gray-500 text-center">
            École d'Ingénieur SeaTech - Université de Toulon
          </p>
        </div>
      </div>
    </div>
  );
}
