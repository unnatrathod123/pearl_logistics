import { ShieldCheck, Clock, Globe, Search, Target, Award } from 'lucide-react';
import Image from 'next/image';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-80px)] snap-start flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full animate-fade-in">
          <Image
            src="/Rice_&_Wheat_In_Hand.jpeg"
            alt="Golden wheat field representing our core agricultural commodities"
            fill
            className="object-cover brightness-[0.5] hover:scale-105 transition-transform duration-10000"
            priority
            unoptimized
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#9932CC] via-[#7F5AF0] to-[#CBC3E3] mb-6 tracking-tight drop-shadow-lg">
            Delivering Your World, <span className="bg-clip-text bg-linear-to-r from-[#7F5AF0] to-[#CBC3E3] drop-shadow-md">On Time.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium drop-shadow-md">
            Fast, reliable, and secure logistics solutions for modern businesses around the globe.
          </p>

          {/* Track Shipment Mock Input */}
          <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex border border-white/30 hover:border-white/50 transition-colors">
            <input
              type="text"
              placeholder="Enter your tracking number..."
              className="flex-1 bg-white/95 px-6 py-4 rounded-l-xl outline-none text-gray-800 placeholder-gray-500 font-medium"
            />
            <button className="bg-[#7F5AF0] hover:bg-[#6c4be0] text-white px-8 py-4 rounded-r-xl font-bold transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-[#7F5AF0]/30">
              <Search size={20} /> <span className="hidden sm:inline">Track</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white min-h-[calc(100vh-80px)] snap-start flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Pearl Logistics?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We provide industry-leading logistics solutions designed to scale with your business and deliver unmatched reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-[#E6E6FA]/20 p-8 rounded-3xl border border-[#E6E6FA] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-[#7F5AF0]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Globe className="text-[#7F5AF0]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Our extensive worldwide network ensures your shipments reach any destination with speed and precision.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#E6E6FA]/20 p-8 rounded-3xl border border-[#E6E6FA] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-[#7F5AF0]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Clock className="text-[#7F5AF0]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We pride ourselves on punctuality, offering guaranteed delivery times so you can plan with confidence.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#E6E6FA]/20 p-8 rounded-3xl border border-[#E6E6FA] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="bg-[#7F5AF0]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#7F5AF0]" size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Transport</h3>
              <p className="text-gray-600 leading-relaxed">
                Top-tier security protocols protect your valuable cargo at every step of its journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-gray-50 border-t border-[#E6E6FA] min-h-[calc(100vh-80px)] snap-start flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
                  alt="Warehouse operations"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Pearl Logistics began with a simple mission: to make global shipping accessible, reliable, and transparent for businesses of all sizes. Over the decades, we've grown from a local freight forwarder into a global logistics powerhouse.
              </p>

              <div className="flex items-start gap-4 mb-6 mt-10">
                <div className="bg-[#7F5AF0] p-3 rounded-xl shadow-lg shrink-0">
                  <Target className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower global commerce by delivering innovative, sustainable, and highly efficient supply chain solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#7F5AF0] p-3 rounded-xl shadow-lg shrink-0">
                  <Award className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the world's most trusted logistics partner, known for our technological edge and unwavering commitment to customer success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Elevate Your Global Supply Chain?" 
        description="Partner with Pearl Logistics for secure, reliable, and on-time commodity trading and transportation worldwide."
      />
    </div>
  );
}