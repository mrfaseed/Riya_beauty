import React from 'react'
import { motion } from 'framer-motion'


const reviews = [
{ text: 'The best salon near me — incredible service and very relaxing.', name: 'Sahana' },
{ text: 'My bridal makeup was flawless, lasted the entire event!', name: 'Kavya' },
]


export default function Testimonials() {
return (
<section className="py-16 bg-gradient-to-r from-rose-50 to-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h3 className="text-2xl font-semibold">What clients say</h3>
<p className="mt-2 text-gray-600">Real reviews — honest feelings.</p>
<div className="mt-8 grid md:grid-cols-2 gap-6">
{reviews.map((t, i) => (
<motion.blockquote key={i} className="bg-white p-6 rounded-2xl shadow" whileHover={{ scale: 1.02 }}>
<p className="text-gray-700 italic">"{t.text}"</p>
<div className="mt-4 text-sm font-semibold">— {t.name}</div>
</motion.blockquote>
))}
</div>
</div>
</section>
)
}