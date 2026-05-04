export default function Products() {
  const products = [
    { name: "Premium Basmati Rice", desc: "Long-grain, aromatic.", weight: "Available in 25kg / 50kg" },
    { name: "Organic Jasmine Rice", desc: "Fragrant, soft texture.", weight: "Available in 10kg / 20kg" },
    { name: "High-Protein Wheat", desc: "Grade-A quality milling wheat.", weight: "Bulk supply only" },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Export Commodities</h1>
        <p className="text-gray-500">Premium quality grains sourced directly from sustainable farms.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-4xl overflow-hidden border border-[#E6E6FA] shadow-sm hover:shadow-md transition-all">
            <div className="h-48 bg-[#F4F4FF] flex items-center justify-center text-[#7F5AF0]/40 font-semibold italic">
              Product Image
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <span className="text-xs font-bold text-[#7F5AF0] bg-[#E6E6FA] px-3 py-1 rounded-full">{p.weight}</span>
              <button className="w-full mt-8 py-3 rounded-xl border-2 border-[#7F5AF0] text-[#7F5AF0] font-bold hover:bg-[#7F5AF0] hover:text-white transition-all">
                Inquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}