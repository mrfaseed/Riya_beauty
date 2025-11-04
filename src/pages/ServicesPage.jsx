import React from 'react'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'


export default function ServicesPage() {
return (
<section className="py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center">
<h3 className="text-2xl font-semibold">Our Services</h3>
<p className="mt-2 text-gray-600 max-w-2xl mx-auto">Curated treatments for every need — quick touchups to full-day pampering.</p>
</div>


<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
{services.map(s => <ServiceCard key={s.id} s={s} />)}
</div>
</div>
</section>
)
}