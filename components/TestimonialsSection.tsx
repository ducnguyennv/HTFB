import React, { useMemo, useCallback } from 'react'
import { Card, CardContent } from "./ui/card"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Star } from "lucide-react"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

interface Testimonial {
  name: string;
  position: string;
  comment: string;
  image: string;
  rating: number;
}

const TestimonialCard = React.memo(({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="h-full overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
    <CardContent className="p-8 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-start mb-8">
          <LazyLoadImage
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={80}
            effect="blur"
            className="rounded-full mr-10"
            onError={(e) => {
              e.currentTarget.src = '/images/customer1.png';
            }}
          />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.position}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.comment}"</p>
      </div>
      <div className="flex items-center" aria-label={`Đánh giá ${testimonial.rating} sao`}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="text-yellow-500 mr-1" size={24} aria-hidden="true" />
        ))}
      </div>
    </CardContent>
  </Card>
));

const useTestimonialSlider = () => {
  return useKeenSlider({
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
};

export default function TestimonialsSection() {
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "Chủ doanh nghiệp",
      comment: "Dịch vụ khôi phục tài khoản Facebook của họ thật sự xuất sắc. Tôi đã lấy lại được tài khoản quan trọng của mình chỉ trong vòng 30 phút. Đội ngũ hỗ trợ rất chuyên nghiệp và hiệu quả.",
      image: "/images/customer1.png",
      rating: 5
    },
    {
      id: 2,
      name: "Nguyễn Thị Mơ",
      position: "Nhân viên văn phòng",
      comment: "Tôi đã rất lo lắng khi tài khoản Facebook của mình bị hack. May mắn thay, tôi đã tìm thấy dịch vụ này. Họ đã giúp tôi lấy lại tài khoản một cách nhanh chóng và an toàn.",
      image: "/images/customer2.png",
      rating: 5
    },
    {
      id: 3,
      name: "Hồ Ngọc Linh",
      position: "Sinh viên",
      comment: "Dịch vụ rất tuyệt vời! Tôi đã nghĩ mình sẽ mất tài khoản Facebook vĩnh viễn, nhưng họ đã giúp tôi khôi phục nó chỉ trong vài giờ. Cảm ơn rất nhiều!",
      image: "/images/customer3.png",
      rating: 4
    },
    {
      id: 4,
      name: "Trần Chiến",
      position: "Freelancer",
      comment: "Tôi rất ấn tượng với tốc độ và hiệu quả của dịch vụ. Đội ngũ hỗ trợ rất chuyên nghiệp và luôn sẵn sàng giải đáp mọi thắc mắc của tôi. Highly recommended!",
      image: "/images/tran-chien.png",
      rating: 5
    },
    {
      id: 5,
      name: "Nga Linh Phạm",
      position: "Giáo viên",
      comment: "Tôi đã rất lo lắng khi không thể truy cập vào tài khoản Facebook của mình. Nhưng sau khi sử dụng dịch vụ này, tôi đã lấy lại được tài khoản một cách nhanh chóng. Cảm ơn rất nhiều!",
      image: "/images/nga-linh-pham.png",
      rating: 5
    }
  ], []);

  if (testimonials.length === 0) {
    return null; // hoặc hiển thị một thông báo
  }

  const [sliderRef] = useTestimonialSlider();

  return (
    <section id="đánh-giá-khách-hàng" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"> {/* Tăng padding-y */}
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-gray-800">Đánh Giá Khách Hàng</h2> {/* Tăng font-size và margin-bottom */}
        <div ref={sliderRef} className="keen-slider" role="region" aria-label="Đánh giá khách hàng">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="keen-slider__slide px-4" role="group" aria-label={`Đánh giá của ${testimonial.name}`}> {/* Thêm padding-x */}
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}