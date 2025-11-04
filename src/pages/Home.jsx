import React from 'react'
import Hero from '../components/Hero'
import ServicesPage from './ServicesPage'
import GalleryPage from './GalleryPage'
import TeamPage from './TeamPage'
import Testimonials from "../components/Testimonials"


export default function Home() {
return (
<>
<Hero />
<ServicesPage />
<GalleryPage />
<TeamPage />
<Testimonials />
</>
)
}