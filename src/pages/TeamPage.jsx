import React from 'react'
import TeamMember from '../components/TeamMember'


const names = ["Aisha", "Maya", "Rina", "Jude"]


export default function TeamPage() {
return (
<section className="py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center">
<h3 className="text-2xl font-semibold">Meet the Team</h3>
<p className="mt-2 text-gray-600">Experts who care for your beauty and comfort.</p>
</div>


<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
{names.map((n, idx) => <TeamMember key={n} name={n} role="Stylist" idx={idx} />)}
</div>
</div>
</section>
)
}