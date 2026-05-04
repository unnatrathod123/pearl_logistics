export default function ContactPage()
{
    return(
        <>
        <section id="contact" className="py-24 bg-stone-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Request a Logistics Quote</h2>
                <p className="text-stone-400 mb-12">Partner with us for reliable bulk shipping and supply chain management.</p>
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <input 
                    type="text" placeholder="Full Name" 
                    className="p-4 bg-stone-800 rounded-lg border border-stone-700 focus:outline-none focus:border-amber-500" 
                />
                <input 
                    type="email" placeholder="Email Address" 
                    className="p-4 bg-stone-800 rounded-lg border border-stone-700 focus:outline-none focus:border-amber-500" 
                />
                <textarea 
                    placeholder="Message (e.g. Volume and Destination)" 
                    className="p-4 bg-stone-800 rounded-lg border border-stone-700 focus:outline-none focus:border-amber-500 md:col-span-2 h-32"
                ></textarea>
                <button className="md:col-span-2 bg-amber-600 py-4 rounded-lg font-bold hover:bg-amber-700 transition">
                    Send Message
                </button>
                </form>
            </div>
        </section>
    </>
    );
}