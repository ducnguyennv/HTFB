import React from 'react'
import { Card, CardContent } from "./ui/card"
import { CheckCircle, Shield } from "lucide-react"
import ContactButton from './ContactButton'

export default function ServicesSection() {
  return (
    <section id="dịch-vụ" className="py-12 bg-white">
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
        <div className="text-center mt-8">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}