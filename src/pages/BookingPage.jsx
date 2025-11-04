import React from 'react'
import { services } from '../data/services'


export default function BookingPage() {
return (
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
)
}