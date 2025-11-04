import React from 'react'
import { motion } from 'framer-motion'


export default function Hero() {
return (
<section className="bg-gradient-to-br from-white via-rose-50 to-rose-100">
<div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
<div>
<motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">
Premium beauty care, crafted for you.
</motion.h1>


<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-gray-600 max-w-xl">
Book a relaxing experience — from signature facials to professional styling. Our certified stylists and therapists use only top-tier products for long-lasting results.
</motion.p>


<motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
<a href="/booking" className="inline-block px-6 py-3 rounded-2xl bg-rose-500 text-white font-semibold shadow-lg transform hover:scale-105 transition">Book Appointment</a>
<a href="/services" className="inline-block px-6 py-3 rounded-2xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition">Explore Services</a>
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
)
}