import React from 'react'
import { motion } from 'framer-motion'


export default function ServiceCard({ s }) {
return (
<motion.div whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-white shadow-md border border-gray-50">
<div className="text-3xl mb-3">{s.icon}</div>
<div className="font-semibold text-lg">{s.title}</div>
<p className="text-gray-500 mt-2">{s.desc}</p>
<div className="mt-6 flex items-center justify-between">
<div className="text-rose-500 font-bold">{s.price}</div>
<a href="/booking" className="text-sm font-medium hover:underline">Book now →</a>
</div>
</motion.div>
)
}