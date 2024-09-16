import Image from 'next/image'
import ContactButton from './ContactButton'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="lien-he" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Liên hệ với chúng tôi
        </motion.h2>
        <div className="flex flex-wrap items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/support-team.jpg"
                alt="Đội ngũ hỗ trợ khách hàng"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 md:pl-12"
          >
            <p className="text-xl mb-6 text-gray-700">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ ngay để được tư vấn miễn phí!
            </p>
            <ContactButton />
          </motion.div>
        </div>
      </div>
    </section>
  )
}