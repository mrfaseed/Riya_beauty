import React from 'react'


export default function Footer() {
return (
<footer className="bg-gray-900 text-white py-10 mt-12">
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
<div className="mt-8 text-center text-xs text-gray-500">© " + new Date().getFullYear() + " Riya Beauty Parlour — All rights reserved.</div>
</footer>
)
}
