import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/contact_header.png"
            alt="Contact Pearl Logistics"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9932CC] via-[#7F5AF0] to-[#CBC3E3] mb-6 tracking-tight drop-shadow-lg">Get in Touch</h1>
          <p className="text-xl text-[#E6E6FA] max-w-2xl mx-auto font-medium drop-shadow-md">
            Ready to optimize your supply chain? Our logistics experts are here to help you navigate global trade.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#E6E6FA] p-4 rounded-2xl text-[#7F5AF0]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Global Headquarters</h3>
                  <p className="text-gray-600">123 Logistics Avenue<br />New York, NY 10001<br />United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#E6E6FA] p-4 rounded-2xl text-[#7F5AF0]">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543 (Support)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#E6E6FA] p-4 rounded-2xl text-[#7F5AF0]">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contact@pearllogistics.com<br />support@pearllogistics.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#E6E6FA] p-4 rounded-2xl text-[#7F5AF0]">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Operating Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM (EST)<br />24/7 Global Support Line Available</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
                <MapPin size={48} className="mb-4 text-gray-400" />
                <span className="font-medium text-lg">Interactive Map Placeholder</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#7F5AF0] focus:ring-2 focus:ring-[#7F5AF0]/20 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#7F5AF0] focus:ring-2 focus:ring-[#7F5AF0]/20 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#7F5AF0] focus:ring-2 focus:ring-[#7F5AF0]/20 transition-all outline-none resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-[#7F5AF0] hover:bg-[#6c4be0] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-[#7F5AF0]/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}