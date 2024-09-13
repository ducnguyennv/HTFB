import React from 'react'
import ContactButton from './ContactButton'

export default function ContactSection() {
  return (
    <section id="liên-hệ" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Liên Hệ Với Chúng Tôi</h2>
        <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
          Nếu bạn cần hỗ trợ hoặc có câu hỏi, đừng ngần ngại liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
        </p>
        <ContactButton />
      </div>
    </section>
  )
}