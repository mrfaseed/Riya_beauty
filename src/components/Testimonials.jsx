import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  { text: 'The best salon experience I have ever had. Incredible service and very relaxing atmosphere that made me feel completely pampered.', name: 'Sahana M.', role: 'Regular Client' },
  { text: 'My bridal makeup was absolutely flawless and lasted the entire event without any touchups needed. Perfection!', name: 'Kavya R.', role: 'Bride' },
  { text: 'Outstanding haircut and styling service. The stylist truly understood what I wanted and delivered beyond expectations.', name: 'Priya S.', role: 'New Client' },
  { text: 'The facial treatment transformed my skin. Professional service with amazing results that lasted for weeks.', name: 'Anjali P.', role: 'Skincare Client' },
  { text: 'Impeccable hygiene standards and highly professional staff. Every visit feels like a luxury experience.', name: 'Meera K.', role: 'VIP Client' },
  { text: 'The color treatment was exactly what I envisioned. Expert hands and attention to detail throughout.', name: 'Neha V.', role: 'Color Client' },
]

export default function Testimonials() {
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Discover what our valued clients have to say about their journey with us
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300 mx-auto mt-8"></div>
        </motion.div>

        {/* Desktop Marquee */}
        <div className="hidden lg:block relative">
          <motion.div
            className="flex space-x-8 py-8"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-96 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-amber-400 text-6xl mb-4">"</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
                  {review.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900 text-lg">{review.name}</div>
                  <div className="text-gray-500 text-sm">{review.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        </div>

        {/* Mobile & Tablet Stack Layout */}
        <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-amber-400 text-5xl mb-4">"</div>
              <p className="text-gray-700 text-base leading-relaxed mb-6 font-light">
                {review.text}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900 text-base">{review.name}</div>
                <div className="text-gray-500 text-sm">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600 text-lg mb-4">Ready to experience the difference?</p>
          <button className="bg-gradient-to-r from-rose-400 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-light shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Book Your Appointment
          </button>
        </motion.div>
      </div>
    </section>
  )
}