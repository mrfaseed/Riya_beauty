import React from 'react'


export default function GalleryPage() {
return (
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
)
}