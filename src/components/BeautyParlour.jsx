import React from 'react';
import { motion } from 'framer-motion';

const Accent = ({ children }) => (
  <span className="text-rose-500 font-semibold">{children}</span>
);

const Hero = () => (
  <section className="bg-gradient-to-br from-white via-rose-50 to-rose-100">
    <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900"
        >
          Premium beauty care, crafted for you.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-xl"
        >
          Book a relaxing experience — from signature facials to professional styling. Our
          certified stylists and therapists use only top-tier products for long-lasting results.
        </motion.p>

        <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <a href="#booking" className="inline-block px-6 py-3 rounded-2xl bg-rose-500 text-white font-semibold shadow-lg transform hover:scale-105 transition">
            Book Appointment
          </a>
          <a href="#services" className="inline-block px-6 py-3 rounded-2xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition">
            Explore Services
          </a>
        </motion.div>

        <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
          <div className="text-center">
            <div className="text-2xl font-bold">10k+</div>
            <div className="text-sm text-gray-500">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">+12</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm text-gray-500">Satisfaction</div>
          </div>
        </div>
      </div>

      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
        <div className="rounded-2xl shadow-2xl overflow-hidden">
          {/* Placeholder image: replace with yours */}
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=60" alt="beauty" className="w-full h-[420px] object-cover" />
        </div>
        <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=60" alt="mini" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <div className="text-sm font-semibold">Olivia Hart</div>
            <div className="text-xs text-gray-500">Senior Stylist</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const services = [
  { id: 1, title: 'Signature Facial', desc: 'Deep-cleansing, hydration and glow.', price: '₹999', icon: '💆‍♀️' },
  { id: 2, title: 'Hair Styling', desc: 'Cuts, color and blowouts by pros.', price: '₹799', icon: '✂️' },
  { id: 3, title: 'Manicure & Pedicure', desc: 'Luxury hand & foot treatments.', price: '₹499', icon: '💅' },
  { id: 4, title: 'Bridal Makeup', desc: 'Tailored bridal packages.', price: '₹4999', icon: '💄' },
  { id: 5, title: 'Therapeutic Massage', desc: 'Relax and restore.', price: '₹699', icon: '🧖‍♂️' },
  { id: 6, title: 'Waxing & Threading', desc: 'Precision hair removal.', price: '₹299', icon: '🪒' },
];

const Services = () => (
  <section id="services" className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">Our Services</h3>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Curated treatments for every need — quick touchups to full-day pampering.</p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(s => (
          <motion.div key={s.id} whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-white shadow-md border border-gray-50">
            <div className="text-3xl mb-3">{s.icon}</div>
            <div className="font-semibold text-lg">{s.title}</div>
            <p className="text-gray-500 mt-2">{s.desc}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-rose-500 font-bold">{s.price}</div>
              <a href="#booking" className="text-sm font-medium hover:underline">Book now →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Gallery</h3>
        <a href="#" className="text-sm text-gray-600 hover:underline">View all</a>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-sm bg-white">
            <img src={`https://picsum.photos/seed/beauty-${i}/600/600`} alt={`gallery-${i}`} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">Meet the Team</h3>
        <p className="mt-2 text-gray-600">Experts who care for your beauty and comfort.</p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["Aisha", "Maya", "Rina", "Jude"].map((n, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img src={`https://i.pravatar.cc/150?img=${idx + 15}`} alt={n} className="w-24 h-24 rounded-full mx-auto object-cover" />
            <div className="mt-4 font-semibold">{n}</div>
            <div className="text-sm text-gray-500">Stylist</div>
            <div className="mt-4 text-sm text-gray-600">Specializes in modern cuts and bridal styles.</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16 bg-gradient-to-r from-rose-50 to-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h3 className="text-2xl font-semibold">What clients say</h3>
      <p className="mt-2 text-gray-600">Real reviews — honest feelings.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[{
          text: 'The best salon near me — incredible service and very relaxing.',
          name: 'Sahana'
        },{
          text: 'My bridal makeup was flawless, lasted the entire event!',
          name: 'Kavya'
        }].map((t, i) => (
          <motion.blockquote key={i} className="bg-white p-6 rounded-2xl shadow" whileHover={{ scale: 1.02 }}>
            <p className="text-gray-700 italic">"{t.text}"</p>
            <div className="mt-4 text-sm font-semibold">— {t.name}</div>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

const Booking = () => (
  <section id="booking" className="py-16">
    <div className="max-w-4xl mx-auto px-6 bg-white rounded-2xl shadow-lg p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">Book an appointment</h3>
          <p className="mt-2 text-gray-600">Choose service, date and time. We'll confirm your booking via call or email.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 rounded-xl border border-gray-100 shadow-sm" placeholder="Full name" />
            <input className="p-3 rounded-xl border border-gray-100 shadow-sm" placeholder="Phone number" />
            <select className="p-3 rounded-xl border border-gray-100 shadow-sm">
              <option>Choose service</option>
              {services.map(s => <option key={s.id}>{s.title} — {s.price}</option>)}
            </select>
            <input type="date" className="p-3 rounded-xl border border-gray-100 shadow-sm" />
            <textarea className="md:col-span-2 p-3 rounded-xl border border-gray-100 shadow-sm" placeholder="Additional notes (optional)" />
            <button type="button" className="md:col-span-2 py-3 rounded-2xl bg-rose-500 text-white font-semibold">Request appointment</button>
          </form>
        </div>

        <div className="w-full lg:w-1/3 bg-rose-50 rounded-2xl p-6 flex flex-col gap-4">
          <div className="text-sm text-gray-600">Need help choosing?</div>
          <div className="font-semibold">Call us at <span className="text-rose-600">+91 90000 00000</span></div>
          <div className="text-xs text-gray-500">Walk-ins welcome depending on availability.</div>
          <div className="mt-auto">
            <div className="text-xs text-gray-500">Address</div>
            <div className="font-medium">Riya Beauty Parlour, Madurai Rd, Virudhunagar</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
      <div>
        <div className="text-xl font-bold">Riya Beauty Parlour</div>
        <div className="mt-2 text-gray-400">Luxury beauty treatments for a modern you.</div>
      </div>
      <div>
        <div className="font-semibold">Opening hours</div>
        <div className="text-gray-400 text-sm mt-2">Mon - Sat: 10:00 AM - 8:00 PM</div>
      </div>
      <div>
        <div className="font-semibold">Contact</div>
        <div className="text-gray-400 text-sm mt-2">hello@Riya.example</div>
        <div className="text-gray-400 text-sm">+91 90000 00000</div>
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Riya Beauty Parlour — All rights reserved.</div>
  </footer>
);

export default function BeautyParlour() {
  return (
    <div className="min-h-screen font-sans text-gray-800 antialiased">
      <header className="backdrop-blur bg-white/60 sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-rose-500 flex items-center justify-center text-white font-bold">O</div>
            <div className="font-semibold">Riya</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-rose-500">Services</a>
            <a href="#gallery" className="hover:text-rose-500">Gallery</a>
            <a href="#team" className="hover:text-rose-500">Team</a>
            <a href="#booking" className="rounded-2xl px-4 py-2 bg-rose-500 text-white">Book</a>
          </nav>
          <div className="md:hidden">
            <button className="p-2 rounded-lg border">Menu</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Gallery />
        <div id="team">
          <Team />
        </div>
        <Testimonials />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}
