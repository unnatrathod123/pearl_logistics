'use client';

import { Leaf, Wheat, Search, MapPin, Package, Filter, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Products catalog
const products = [
  {
    id: 1,
    name: 'Basmati Rice',
    description: 'Long-grain, aromatic rice known for its delicate flavor and separate grains.',
    icon: <Leaf className="text-[#7F5AF0]" size={18} />,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070',
    category: 'Rice',
    origin: 'India',
    moq: '25 Metric Tons',
    supply: '5000 MT/Month',
    verified: true,
  },
  {
    id: 2,
    name: 'Wheat',
    description: 'High-protein milling wheat, carefully selected and transported.',
    icon: <Wheat className="text-[#7F5AF0]" size={18} />,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2089',
    category: 'Wheat',
    origin: 'India',
    moq: '50 Metric Tons',
    supply: '10000 MT/Month',
    verified: true,
  },
  {
    id: 3,
    name: 'Long Grain White Rice (Normal)',
    description: 'High-quality, versatile non-basmati white rice suitable for everyday consumption and commercial use.',
    icon: <Leaf className="text-[#7F5AF0]" size={18} />,
    image: '/normal_rice.png',
    category: 'Rice',
    origin: 'India',
    moq: '50 Metric Tons',
    supply: '8000 MT/Month',
    verified: true,
  }
];

const categories = ['All', 'Rice', 'Wheat'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#f8f9fc] min-h-screen pb-24">
      {/* Header */}
      <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/RIce_&_Wheat.jpeg"
            alt="Lush green rice terraces"
            fill
            className="object-cover brightness-[0.4]"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9932CC] via-[#7F5AF0] to-[#CBC3E3] mb-6 tracking-tight drop-shadow-lg">Global Commodity Trading</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md">
            Source high-quality agricultural commodities directly from verified global suppliers.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative lg:sticky lg:top-28 z-10">
              <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold text-xl">
                <Filter size={20} className="text-[#7F5AF0]" />
                <h2>Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search Products</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Basmati Rice"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#7F5AF0] focus:ring-2 focus:ring-[#7F5AF0]/20 transition-all outline-none text-sm text-gray-900 placeholder:text-gray-400"
                  />
                  <Search size={16} className="absolute left-4 top-3.5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Categories</label>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium border border-transparent ${activeCategory === category
                          ? 'bg-[#E6E6FA] text-[#7F5AF0] border-[#E6E6FA]'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent'
                          }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 font-medium">
                Showing <span className="text-gray-900 font-bold">{filteredProducts.length}</span> results
                {activeCategory !== 'All' && <span> for <span className="text-[#7F5AF0]">{activeCategory}</span></span>}
              </p>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col">
                    {/* Image Area */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-[#7F5AF0] flex items-center gap-1.5 shadow-sm">
                        {product.icon} {product.category}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2" title={product.name}>
                        {product.name}
                      </h3>

                      {/* Specs */}
                      <div className="mt-4 space-y-3 mb-6 flex-1">
                        <div className="flex items-start gap-3">
                          <MapPin size={16} className="text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Origin</p>
                            <p className="text-sm text-gray-900 font-semibold">{product.origin}</p>
                          </div>
                        </div>
                        {/* <div className="flex items-start gap-3">
                          <Package size={16} className="text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Min. Order (MOQ)</p>
                            <p className="text-sm text-gray-900 font-semibold">{product.moq}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Search size={16} className="text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Supply Ability</p>
                            <p className="text-sm text-gray-900 font-semibold">{product.supply}</p>
                          </div>
                        </div> */}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                        <button className="flex-1 bg-[#E6E6FA] hover:bg-[#7F5AF0] text-[#7F5AF0] hover:text-white font-bold py-3 rounded-xl transition-colors duration-300 text-sm">
                          Get Latest Price
                        </button>
                        <Link href="/contact" className="flex-1 block text-center bg-white border-2 border-gray-200 hover:border-[#7F5AF0] hover:text-[#7F5AF0] text-gray-700 font-bold py-3 rounded-xl transition-colors duration-300 text-sm">
                          Contact Supplier
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-gray-100">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">We couldn't find any products matching your search criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-6 text-[#7F5AF0] font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}