import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-t border-[#E6E6FA]">
      {/* Background with subtle gradient and glassmorphism elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6E6FA]/20 via-white to-[#CBC3E3]/20 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#7F5AF0]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#9932CC]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9932CC] via-[#7F5AF0] to-[#CBC3E3] mb-6 tracking-tight drop-shadow-sm pb-2">
          Ready to Elevate Your Global Supply Chain?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium">
          Partner with Pearl Logistics for secure, reliable, and on-time commodity trading and transportation worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center gap-3 bg-[#7F5AF0] text-white font-bold text-lg py-4 px-10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#6c4be0] hover:shadow-lg hover:shadow-[#7F5AF0]/30 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Talk to an Expert
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </Link>
          
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#7F5AF0] text-[#7F5AF0] hover:bg-[#7F5AF0]/5 font-bold text-lg py-4 px-10 rounded-2xl transition-all duration-300"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
