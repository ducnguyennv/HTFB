'use client'

import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent } from "../components/ui/card"
import { Facebook, Mail, Phone, Menu, X, CheckCircle, AlertTriangle, Lock, Shield, MessageCircle, DollarSign, Play, CheckSquare, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

export default function ModernLandingPageVietnamese() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const ContactButton = () => (
    <Link href="https://zalo.me/0399173146" target="_blank" rel="noopener noreferrer">
      <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
        Liên hệ ngay
      </Button>
    </Link>
  )

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3)
  }

  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
        <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600">Khôi Phục FB</div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {['Trang Chủ', 'Dịch Vụ', 'Các Bước', 'Câu Hỏi Thường Gặp', 'Liên Hệ'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-indigo-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden bg-white">
              <ul className="flex flex-col items-center space-y-4 py-4">
                {['Trang Chủ', 'Dịch Vụ', 'Các Bước', 'Câu Hỏi Thường Gặp', 'Liên Hệ'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </header>

        <main className="flex-grow">
          <section id="trang-chủ" className="py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Khôi Phục Tài Khoản Facebook Của Bạn
              </h1>
              <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
                Mất quyền truy cập vào Facebook? Đừng lo lắng, đội ngũ chuyên gia của chúng tôi sẽ giúp bạn lấy lại quyền kiểm soát cuộc sống kỹ thuật số của mình. Với nhiều năm kinh nghiệm và tỷ lệ thành công cao, chúng tôi cam kết mang lại giải pháp hiệu quả và nhanh chóng cho bạn.
              </p>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                Bắt Đầu Khôi Phục Ngay
              </Button>
              <div className="mt-12">
                <Image
                  src="/images/facebook-recovery.jpg"
                  alt="Khôi phục tài khoản Facebook"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <ContactButton />
            </div>
          </section>

          <section id="dịch-vụ" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Dịch Vụ Khôi Phục Của Chúng Tôi</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Tại Sao Chọn Chúng Tôi?</h3>
                    <ul className="space-y-2">
                      {[
                        "Đội ngũ chuyên gia với hơn 10 năm kinh nghiệm trong lĩnh vực bảo mật mạng xã hội",
                        "Tỷ lệ thành công trên 99% trong việc khôi phục tài khoản Facebook",
                        "Dịch vụ nhanh chóng, với thời gian phản hồi trung bình chỉ 5 phút",
                        "Hỗ trợ khách hàng 24/7 qua điện thoại, zalo, facebook",
                        "Giá cả linh hoạt, phù hợp với mọi người, làm xong thanh toán",
                        "Bảo mật thông tin khách hàng tuyệt đối"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="mr-2 text-green-500" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Chúng Tôi Cung Cấp</h3>
                    <p className="mb-4">Dịch vụ khôi phục tài khoản Facebook toàn diện của chúng tôi bao gồm:</p>
                    <ul className="space-y-2">
                      {[
                        "Khôi phục tài khoản bị hack, loại bỏ quyền truy cập của kẻ xâm nhập",
                        "Hỗ trợ đặt lại mật khẩu khi quên hoặc mất quyền truy cập email",
                        "Khôi phục xác thực hai yếu tố khi mất thiết bị hoặc số điện thoại",
                        "Khôi phục quyền truy cập tài khoản bị khóa hoặc vô hiệu hóa",
                        "Hướng dẫn chi tiết về các biện pháp bảo mật tài khoản sau khi khôi phục",
                        "Hỗ trợ khôi phục dữ liệu và nội dung đã bị xóa (nếu có thể)"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <Shield className="mr-2 text-blue-500" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <ContactButton />
              </div>
            </div>
          </section>

          <section id="các-bước" className="py-10 md:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center text-gray-800">Quy Trình Làm Việc Của Chúng Tôi</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
                {[
                  { 
                    title: "Tiếp Nhận", 
                    description: "Tiếp nhận tình trạng",
                    icon: <Phone className="text-indigo-600" size={24} />
                  },
                  { 
                    title: "Tư Vấn", 
                    description: "Tư vấn vấn đề",
                    icon: <MessageCircle className="text-indigo-600" size={24} />
                  },
                  { 
                    title: "Báo Giá", 
                    description: "Báo giá dịch vụ",
                    icon: <DollarSign className="text-indigo-600" size={24} />
                  },
                  { 
                    title: "Thực Hiện", 
                    description: "Thực hiện công việc",
                    icon: <Play className="text-indigo-600" size={24} />
                  },
                  { 
                    title: "Bàn Giao", 
                    description: "Bàn giao kết quả",
                    icon: <CheckSquare className="text-indigo-600" size={24} />
                  },
                  { 
                    title: "Bảo Hành", 
                    description: "Hỗ trợ bảo hành",
                    icon: <Shield className="text-indigo-600" size={24} />
                  }
                ].map((step, index) => (
                  <Card key={index} className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg relative">
                    <CardContent className="p-3 md:p-6">
                      <div className="absolute top-0 left-0 bg-indigo-600 text-white w-6 h-6 flex items-center justify-center rounded-br-lg text-xs font-bold">
                        {index + 1}
                      </div>
                      <div className="flex justify-center mb-2 md:mb-4">{step.icon}</div>
                      <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2 text-center">{step.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center text-gray-600">
                <p className="text-sm md:text-base">Hãy làm theo các bước từ 1 đến 6 để được hỗ trợ tốt nhất!</p>
              </div>
              <div className="mt-8 text-center">
                <ContactButton />
              </div>
            </div>
          </section>

          <section id="câu-hỏi-thường-gặp" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Câu Hỏi Thường Gặp</h2>
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {[
                  {
                    question: "Mất bao lâu để khôi phục tài khoản Facebook của tôi?",
                    answer: "Thời gian khôi phục tùy thuộc vào tình trạng cụ thể của tài khoản. Thông thường, chúng tôi có thể khôi phục tài khoản trong vòng 5-10 phút sau khi nhận đủ thông tin cần thiết."
                  },
                  {
                    question: "Chi phí cho dịch vụ khôi phục tài khoản là bao nhiêu?",
                    answer: "Chi phí sẽ phụ thuộc vào độ phức tạp của vấn đề. Chúng tôi cung cấp báo giá miễn phí sau khi đánh giá tình trạng tài khoản của bạn. Cam kết không có phí ẩn."
                  },
                  {
                    question: "Tôi có thể tin tưởng dịch vụ của các bạn không?",
                    answer: "Chúng tôi cam kết bảo mật thông tin tuyệt đối và tuân thủ các quy định về bảo vệ dữ liệu. Đội ngũ của chúng tôi gồm các chuyên gia được chứng nhận về bảo mật mạng xã hội."
                  },
                  {
                    question: "Nếu không thể khôi phục tài khoản, tôi có được hoàn tiền không?",
                    answer: "Chúng tôi có chính sách hoàn tiền 100% nếu không thể khôi phục tài khoản của bạn. Tuy nhiên, với tỷ lệ thành công trên 95%, chúng tôi tin rằng sẽ giải quyết được vấn đề của bạn."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 text-center">
                <ContactButton />
              </div>
            </div>
          </section>

          <section id="đánh-giá-khách-hàng" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Khách Hàng Nói Gì Về Chúng Tôi</h2>
              <div className="relative">
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
                  <ChevronLeft className="text-gray-600" size={24} onClick={prevSlide} />
                </button>
                
                <div className="overflow-hidden">
                  <div className="flex transition-transform duration-300 ease-in-out">
                    {[
                      {
                        name: "Nguyễn Văn A",
                        position: "Chủ doanh nghiệp",
                        comment: "Dịch vụ khôi phục tài khoản Facebook của họ thật sự xuất sắc. Tôi đã lấy lại được tài khoản quan trọng của mình chỉ trong vòng 30 phút. Đội ngũ hỗ trợ rất chuyên nghiệp và hiệu quả.",
                        image: "/images/customer1.png",
                        rating: 5
                      },
                      {
                        name: "Trần Thị B",
                        position: "Influencer",
                        comment: "Đội ngũ hỗ trợ rất chuyên nghiệp và thân thiện. Họ đã giúp tôi khôi phục tài khoản bị hack một cách nhanh chóng và an toàn. Tôi đặc biệt ấn tượng với sự tận tâm và kiến thức chuyên môn của họ.",
                        image: "/images/customer2.png",
                        rating: 5
                      },
                      {
                        name: "Lê Văn C",
                        position: "Nhân viên văn phòng",
                        comment: "Tôi đã nghĩ mình sẽ mất tài khoản Facebook vĩnh viễn, nhưng nhờ có dịch vụ của họ, tôi đã lấy lại được tất cả. Cảm ơn rất nhiều! Giá cả hợp lý và dịch vụ xuất sắc.",
                        image: "/images/customer3.png",
                        rating: 5
                      },
                      {
                        name: "Phạm Thị D",
                        position: "Sinh viên",
                        comment: "Tôi rất lo lắng khi tài khoản Facebook của mình bị khóa, nhưng đội ngũ hỗ trợ đã giúp tôi giải quyết vấn đề một cách nhanh chóng. Họ giải thích rõ ràng từng bước và đảm bảo tôi hiểu được quy trình.",
                        image: "/images/customer4.jpg",
                        rating: 4
                      },
                      {
                        name: "Hoàng Văn E",
                        position: "Freelancer",
                        comment: "Dịch vụ khôi phục tài khoản của họ thật sự đáng tin cậy. Tôi đã thử nhiều cách khác nhau nhưng không thành công, may mắn tìm được họ. Chỉ trong vài giờ, tôi đã lấy lại được quyền kiểm soát tài khoản của mình.",
                        image: "/images/customer5.jpg",
                        rating: 5
                      },
                      {
                        name: "Ngô Thị F",
                        position: "Giáo viên",
                        comment: "Tôi rất ấn tượng với tốc độ và hiệu quả của dịch vụ. Họ không chỉ giúp tôi khôi phục tài khoản mà còn hướng dẫn cách bảo vệ tài khoản trong tương lai. Rất chuyên nghiệp và đáng tin cậy!",
                        image: "/images/customer6.jpg",
                        rating: 5
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="w-full md:w-1/3 px-4 flex-shrink-0">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                          <div className="flex items-center mb-4">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={60}
                              height={60}
                              className="rounded-full mr-4"
                            />
                            <div>
                              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                              <p className="text-gray-600">{testimonial.position}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} size={20} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
                  <ChevronRight className="text-gray-600" size={24} onClick={nextSlide} />
                </button>
              </div>
            </div>
          </section>

          <section id="liên-hệ" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Liên Hệ Với Chúng Tôi</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/support-team.jpg"
                    alt="Đội ngũ hỗ trợ của chúng tôi"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 max-w-md">
                  <Card>
                    <CardContent className="p-6">
                      <form className="space-y-4">
                        <Input placeholder="Họ Tên Của Bạn" className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                        <Input type="email" placeholder="Email Của Bạn" className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                        <Input placeholder="Số Điện Thoại Của Bạn" className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                        <Textarea placeholder="Mô tả chi tiết vấn đề của bạn" className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                          Gửi Yêu Cầu Hỗ Trợ
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Khôi Phục FB</h3>
                <p className="text-gray-400">Đối tác đáng tin cậy của bạn trong việc khôi phục và bảo vệ tài khoản Facebook. Với hơn 10 năm kinh nghiệm, chúng tôi cam kết mang lại sự an tâm cho cuộc sống kỹ thuật số của bạn.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h4>
                <ul className="space-y-2">
                  {['Trang Chủ', 'Dịch Vụ', 'Các Bước', 'Câu Hỏi Thường Gặp', 'Liên Hệ'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Thông Tin Liên Hệ</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="mr-2" size={18} /> Hotline: 0399 173 146 | 0327 66 1723 (24/7)
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="mr-2" size={18} /> 
                    <a href="https://zalo.me/0399173146" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                      Zalo: 0399 173 146
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Facebook className="mr-2" size={18} /> 
                    <a href="https://www.facebook.com/duc.long.6" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                      Facebook: Đức Long
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Facebook className="mr-2" size={18} /> 
                    <a href="https://www.facebook.com/halongmeta" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                      Facebook: Hạ Long Meta
                    </a>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="mr-2" size={18} /> Hỗ trợ khẩn cấp: 0399 173 146
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; 2023 Khôi Phục FB. Tất cả các quyền được bảo lưu.</p>
              <p className="mt-2 text-sm text-gray-400">Chúng tôi cam kết bảo mật thông tin và tuân thủ các quy định về bảo vệ dữ liệu cá nhân.</p>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  )
}