import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: "Liên hệ với chúng tôi",
    description: "Gửi yêu cầu hỗ trợ qua Zalo hoặc form liên hệ."
  },
  {
    title: "Đánh giá tình trạng",
    description: "Chuyên gia của chúng tôi sẽ phân tích tình trạng tài khoản của bạn."
  },
  {
    title: "Đề xuất giải pháp",
    description: "Chúng tôi sẽ đưa ra phương án khôi phục phù hợp nhất."
  },
  {
    title: "Tiến hành khôi phục",
    description: "Thực hiện các bước khôi phục tài khoản theo quy trình chuyên nghiệp."
  },
  {
    title: "Bàn giao và hướng dẫn",
    description: "Trả lại tài khoản và hướng dẫn bảo mật để tránh sự cố tương tự."
  }
]

export default function WorkflowSection() {
  return (
    <section id="quy-trinh" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Quy trình làm việc
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}