import React, { useMemo } from 'react'
import { Card, CardContent } from "./ui/card"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Star } from "lucide-react"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function TestimonialsSection() {
  const testimonials = useMemo(() => [
    {
      name: "Nguyễn Văn A",
      position: "Chủ doanh nghiệp",
      comment: "Dịch vụ khôi phục tài khoản Facebook của họ thật sự xuất sắc. Tôi đã lấy lại được tài khoản quan trọng của mình chỉ trong vòng 30 phút. Đội ngũ hỗ trợ rất chuyên nghiệp và hiệu quả.",
      image: "/images/customer1.png",
      rating: 5
    },
    // ... (thêm các testimonial khác)
  ], []);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 15 },
      },
    },
  });

  return (
    <section id="đánh-giá-khách-hàng" className="py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Đánh Giá Khách Hàng</h2>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="keen-slider__slide">
              <Card className="h-full overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center mb-4">
                      <LazyLoadImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        effect="blur"
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 mr-1" size={18} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}