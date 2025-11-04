import React from 'react'


export default function TeamMember({ name, role, idx }) {
return (
<div className="bg-white p-6 rounded-2xl shadow-md text-center">
<img src={`https://i.pravatar.cc/150?img=${idx + 15}`} alt={name} className="w-24 h-24 rounded-full mx-auto object-cover" />
<div className="mt-4 font-semibold">{name}</div>
<div className="text-sm text-gray-500">{role}</div>
<div className="mt-4 text-sm text-gray-600">Specializes in modern cuts and bridal styles.</div>
</div>
)
}