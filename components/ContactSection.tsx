import Image from 'next/image'
import ContactButton from './ContactButton'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Liên hệ với chúng tôi</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/support-team.jpg"
                alt="Đội ngũ hỗ trợ khách hàng"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <p className="text-xl mb-6">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ ngay để được tư vấn miễn phí!
            </p>
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  )
}