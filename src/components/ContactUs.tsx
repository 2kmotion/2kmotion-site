import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
  Instagram,
  Clock,
} from 'lucide-react';

interface ContactUsProps {
  preFilledMessage?: string;
  preFilledService?: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({
  preFilledMessage = '',
  preFilledService = 'Web Application Development',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preFilledService || 'Web Application Development',
    message: preFilledMessage || '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Synchronize when prefilled changes
  React.useEffect(() => {
    if (preFilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: preFilledMessage,
        service: preFilledService || prev.service,
      }));
    }
  }, [preFilledMessage, preFilledService]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or business name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please briefly describe your project or requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Web Application Development',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#238B45] font-['Space_Grotesk'] mb-2 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-[#41AB5D]" />
            <span>Connect With Our Team</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#005A32] tracking-tight">
            Start Your Project With 2K Motion.
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Whether you need a full-scale web application, a local shop billing system, or creative branding, we are ready to assist. Reach out directly or submit your project scope below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Company Contact Cards & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F7FCF5] border border-[#C7E9C0] space-y-6 shadow-xs">
              <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#005A32] border-b border-[#E5F5E0] pb-3">
                Headquarters & Direct Lines
              </h3>

              {/* Mobile Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white border border-[#C7E9C0] text-[#238B45] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Direct Phone & WhatsApp</p>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="text-base font-bold text-[#005A32] hover:text-[#238B45] transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/918148544881?text=Hello%202K%20Motion,%20I%20would%20like%20to%20discuss%20a%20project`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#238B45] hover:text-[#005A32] font-bold inline-flex items-center gap-1 mt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white border border-[#C7E9C0] text-[#238B45] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Official Email</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-base font-bold text-[#005A32] hover:text-[#238B45] transition-colors block mt-0.5 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Replies typically within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white border border-[#C7E9C0] text-[#238B45] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Registered Office</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent('Kattupillaiyar Kovil Street, Rameswaram, Tamil Nadu 623526')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#238B45] hover:text-[#005A32] font-bold inline-flex items-center gap-1 mt-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>View Location on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white border border-[#C7E9C0] text-[#238B45] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Official Social Channel</p>
                  <a
                    href={COMPANY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#005A32] hover:text-[#238B45] transition-colors inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>@twokmotion</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#238B45]" />
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Follow our latest projects & design reels</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-4 border-t border-[#E5F5E0] flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#238B45]" />
                  <span>Working Hours</span>
                </span>
                <span className="text-[#005A32] font-bold">Mon – Sat: 9:00 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Form with Green Input Borders */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#C7E9C0] shadow-sm relative">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#E5F5E0] text-[#238B45] flex items-center justify-center mx-auto border border-[#A1D99B]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#005A32]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#005A32]">{formData.name}</strong>. The 2K Motion team has received your project details regarding{' '}
                    <strong className="text-[#238B45]">{formData.service}</strong>. We will review your requirements and respond promptly.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-white border border-[#C7E9C0] hover:bg-[#F7FCF5] text-xs font-bold text-[#005A32] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`https://wa.me/918148544881?text=Hello%202K%20Motion,%20I%20just%20submitted%20an%20inquiry%20via%20your%20website%20for%20${encodeURIComponent(formData.service)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#238B45] hover:bg-[#005A32] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Follow Up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="border-b border-[#E5F5E0] pb-3">
                    <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#005A32]">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tell us about your application, software, or design requirements.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#005A32] mb-1">
                      Your Name / Business Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Anand Kumar / Grace Fresh Market"
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-[#C7E9C0] focus:border-[#41AB5D] focus:ring-2 focus:ring-[#41AB5D]/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Dual Column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#005A32] mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="yourname@domain.com"
                        className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-[#C7E9C0] focus:border-[#41AB5D] focus:ring-2 focus:ring-[#41AB5D]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#005A32] mb-1">
                        Mobile Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-[#C7E9C0] focus:border-[#41AB5D] focus:ring-2 focus:ring-[#41AB5D]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#005A32] mb-1">
                      Primary Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#C7E9C0] rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#41AB5D] focus:ring-2 focus:ring-[#41AB5D]/20 cursor-pointer"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#005A32] mb-1">
                      Project Details / Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Please outline the type of app, software, or design you need, timeline expectations, or any specific questions..."
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-[#C7E9C0] focus:border-[#41AB5D] focus:ring-2 focus:ring-[#41AB5D]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button: #238B45 hover #005A32 */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#238B45] hover:bg-[#005A32] text-white font-bold text-sm shadow-md shadow-[#238B45]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Your contact information will only be used to respond to your project request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
