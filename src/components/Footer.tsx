import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Instagram,
  ArrowUp,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F7FCF5] border-t border-[#E5F5E0] text-slate-600 text-xs">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-slate-600 text-sm leading-relaxed pr-4">
              2K Motion is a startup IT and digital services company based in Rameswaram, Tamil Nadu. We build web applications, mobile apps, custom billing software, creative designs, and growth-focused digital marketing solutions.
            </p>
            <div className="pt-2 text-xs font-mono font-medium text-[#005A32]">
              <span>Rameswaram, Tamil Nadu</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-['Space_Grotesk'] text-[#005A32] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Our Projects', id: 'portfolio' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'Our Process', id: 'process' },
                { name: 'Scope Builder', id: 'quote-builder' },
                { name: 'Contact Us', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-[#238B45] transition-colors cursor-pointer text-left font-medium"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-['Space_Grotesk'] text-[#005A32] uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="hover:text-[#238B45] transition-colors cursor-pointer text-left font-medium"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-['Space_Grotesk'] text-[#005A32] uppercase tracking-wider">
              Official Contact
            </h4>
            <div className="space-y-2.5 text-slate-700">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center gap-2 hover:text-[#005A32] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#238B45] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#005A32] transition-colors break-all font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#238B45] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#238B45] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#C7E9C0] text-[#005A32] hover:bg-[#E5F5E0] transition-colors font-semibold"
                >
                  <Instagram className="w-4 h-4 text-[#238B45]" />
                  <span>Instagram: @twokmotion</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer & Copyright */}
      <div className="border-t border-[#E5F5E0] bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {COMPANY_INFO.foundedYear} {COMPANY_INFO.name}. All rights reserved. Registered Startup IT & Digital Services Company, Rameswaram, Tamil Nadu, India.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[#005A32] font-mono text-[11px] font-semibold">www.2kmotion.in</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#F7FCF5] hover:bg-[#E5F5E0] border border-[#C7E9C0] text-[#005A32] transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#238B45]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
