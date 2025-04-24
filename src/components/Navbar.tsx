"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-200/90 backdrop-blur-md shadow-neon' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="group">
            <h1 className="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors">
              <span className="text-primary">REPO</span>DEX
            </h1>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1">
            <NavLink href="/bosses">BOSSES</NavLink>
            {/* Removed maps link temporarily */}
            <NavLink href="/guias/objetos">OBJETOS</NavLink>
            <NavLink href="/guias">GUÍAS</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary focus:outline-none transition-colors"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-dark-400 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="/bosses" onClick={() => setIsOpen(false)}>BOSSES</MobileNavLink>
              {/* Removed maps link temporarily */}
              <MobileNavLink href="/guias/objetos" onClick={() => setIsOpen(false)}>OBJETOS</MobileNavLink>
              <MobileNavLink href="/guias" onClick={() => setIsOpen(false)}>GUÍAS</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Desktop navigation link
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="font-display px-4 py-2 text-sm tracking-wider text-gray-300 hover:text-primary hover:bg-dark-300 rounded transition-colors"
    >
      {children}
    </Link>
  );
}

// Mobile navigation link
function MobileNavLink({ href, onClick, children }: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="font-display text-center py-3 text-gray-300 hover:text-primary hover:bg-dark-300 rounded transition-colors"
    >
      {children}
    </Link>
  );
}