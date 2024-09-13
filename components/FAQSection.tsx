import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export default function FAQSection() {
  return (
    <section id="câu-hỏi-thường-gặp" className="py-12 bg-white">
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
              answer: "Chúng tôi cam kết cố gắng khôi phục tài khoản của bạn. Nếu không thành công, chúng tôi sẽ thực hiện hoàn tiền theo chính sách hoàn tiền của chúng tôi."
            }
          ].map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}