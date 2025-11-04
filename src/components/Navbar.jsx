import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
return (
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-2xl bg-rose-500 flex items-center justify-center text-white font-bold">O</div>
<div className="font-semibold">Riya</div>
</div>


<nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
<NavLink to="/services" className={({isActive}) => isActive ? 'text-rose-500' : ''}>Services</NavLink>
<NavLink to="/gallery" className={({isActive}) => isActive ? 'text-rose-500' : ''}>Gallery</NavLink>
<NavLink to="/team" className={({isActive}) => isActive ? 'text-rose-500' : ''}>Team</NavLink>
<NavLink to="/booking" className="rounded-2xl px-4 py-2 bg-rose-500 text-white">Book</NavLink>
</nav>


<div className="md:hidden">
{/* Mobile menu placeholder - you can add a drawer or dropdown here */}
<button className="p-2 rounded-lg border">Menu</button>
</div>
</div>
)
}