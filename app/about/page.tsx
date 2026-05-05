import { MapPin, Target, Award } from 'lucide-react';
import Image from 'next/image';
import CTA from '@/components/CTA';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Grains_in_bowl.jpeg"
            alt="About Pearl Logistics Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Dark to light gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9932CC] via-[#7F5AF0] to-[#CBC3E3] mb-6 tracking-tight drop-shadow-lg">About <br></br>Pearl Logistics</h1>
          <p className="text-xl text-[#E6E6FA] max-w-3xl mx-auto font-medium drop-shadow-md">
            Connecting the world through innovative logistics solutions since 1995.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24">
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
        title="Join Us in Shaping the Future of Global Logistics" 
        description="Discover how our decades of experience and vast global network can streamline your business operations."
      />
    </div>
  );
}