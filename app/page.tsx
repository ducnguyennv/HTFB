'use client'

import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Card, CardContent } from "../components/ui/card"
import { Facebook, Mail, Phone, Menu, X, CheckCircle, AlertTriangle, Lock, Shield } from "lucide-react"
import Image from 'next/image'

export default function ModernLandingPageVietnamese() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                  src="/placeholder.svg?height=400&width=600"
                  alt="Khôi phục tài khoản Facebook"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
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
                        "Tỷ lệ thành công trên 95% trong việc khôi phục tài khoản Facebook",
                        "Dịch vụ nhanh chóng, với thời gian phản hồi trung bình chỉ 2 giờ",
                        "Hỗ trợ khách hàng 24/7 qua điện thoại, email và chat trực tuyến",
                        "Kế hoạch giá cả linh hoạt, phù hợp với mọi ngân sách",
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
                        "Khôi phục quyền truy cập tài khoản bị khóa hoặc vô hiệu hóa",
                        "Hỗ trợ đặt lại mật khẩu khi quên hoặc mất quyền truy cập email",
                        "Khôi phục xác thực hai yếu tố khi mất thiết bị hoặc số điện thoại",
                        "Khôi phục tài khoản bị hack, loại bỏ quyền truy cập của kẻ xâm nhập",
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
            </div>
          </section>

          <section id="các-bước" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Quy Trình Khôi Phục</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    title: "Liên Hệ Chúng Tôi", 
                    description: "Điền vào biểu mẫu trên trang web hoặc liên hệ qua hotline 24/7 của chúng tôi. Chúng tôi sẽ phản hồi trong vòng 2 giờ.",
                    icon: <Phone className="text-indigo-600" size={40} />
                  },
                  { 
                    title: "Cung Cấp Thông Tin", 
                    description: "Chia sẻ chi tiết về vấn đề tài khoản của bạn. Càng nhiều thông tin, chúng tôi càng có thể hỗ trợ bạn hiệu quả hơn.",
                    icon: <Lock className="text-indigo-600" size={40} />
                  },
                  { 
                    title: "Chúng Tôi Hành Động", 
                    description: "Đội ngũ chuyên gia của chúng tôi sẽ áp dụng các phương pháp tiên tiến nhất để khôi phục tài khoản của bạn một cách an toàn và nhanh chóng.",
                    icon: <Shield className="text-indigo-600" size={40} />
                  }
                ].map((step, index) => (
                  <Card key={index} className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                      <p className="text-gray-600 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Image
                  src="/placeholder.svg?height=300&width=800"
                  alt="Quy trình khôi phục tài khoản"
                  width={800}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </section>

          <section id="câu-hỏi-thường-gặp" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Câu Hỏi Thường Gặp</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    question: "Mất bao lâu để khôi phục tài khoản Facebook của tôi?",
                    answer: "Thời gian khôi phục tùy thuộc vào tình trạng cụ thể của tài khoản. Thông thường, chúng tôi có thể khôi phục tài khoản trong vòng 24-48 giờ sau khi nhận đủ thông tin cần thiết."
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
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="liên-hệ" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Liên Hệ Với Chúng Tôi</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
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
                  <li className="flex items-center"><Phone className="mr-2" size={18} /> Hotline: 1900 1234 (24/7)</li>
                  <li className="flex items-center"><Mail className="mr-2" size={18} /> Email: hotro@khoiphucfb.com</li>
                  <li className="flex items-center"><Facebook className="mr-2" size={18} /> Facebook: /dichvukhoiphucfb</li>
                  <li className="flex items-center"><AlertTriangle className="mr-2" size={18} /> Hỗ trợ khẩn cấp: 0909 123 456</li>
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