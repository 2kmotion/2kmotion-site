import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, Phone, Mail, ArrowRight, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'services', 'portfolio', 'why-us', 'process', 'quote-builder', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#portfolio', id: 'portfolio' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Scope Builder', href: '#quote-builder', id: 'quote-builder' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5F5E0] py-3 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs py-5 border-b border-[#E5F5E0]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#238B45] rounded-lg"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-[#005A32] font-semibold'
                      : 'text-slate-600 hover:text-[#238B45]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#238B45] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Phone link */}
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-[#005A32] transition-colors px-2 py-1.5 rounded-md hover:bg-[#F7FCF5]"
              title="Call 2K Motion"
            >
              <Phone className="w-3.5 h-3.5 text-[#238B45]" />
              <span className="font-semibold">+91 8148544881</span>
            </a>

            {/* Primary Get Quote Button: #238B45, hover #005A32 */}
            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#238B45] hover:bg-[#005A32] rounded-lg transition-all shadow-sm hover:shadow cursor-pointer active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-[#238B45] rounded-md"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#005A32] rounded-lg bg-[#F7FCF5] border border-[#C7E9C0] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#005A32]" /> : <Menu className="w-5 h-5 text-[#005A32]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#E5F5E0] px-4 pt-3 pb-6 mt-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E5F5E0] text-[#005A32] font-semibold border-l-3 border-[#238B45]'
                      : 'text-slate-700 hover:bg-[#F7FCF5] hover:text-[#005A32]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E5F5E0] flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#005A32] px-2 py-1.5"
            >
              <Phone className="w-4 h-4 text-[#238B45]" />
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#005A32] px-2 py-1.5"
            >
              <Mail className="w-4 h-4 text-[#238B45]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#005A32] hover:text-[#238B45] px-2 py-1.5 font-medium"
            >
              <ExternalLink className="w-4 h-4 text-[#238B45]" />
              <span>Instagram: @twokmotion</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full mt-2 py-2.5 text-center text-sm font-semibold text-white bg-[#238B45] hover:bg-[#005A32] rounded-lg shadow-sm"
            >
              Get a Quote Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
