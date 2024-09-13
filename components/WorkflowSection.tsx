import React from 'react'
import { Card, CardContent } from "./ui/card"
import { Phone, MessageCircle, DollarSign, Play, CheckSquare, Shield } from "lucide-react"
import ContactButton from './ContactButton'

export default function WorkflowSection() {
  return (
    <section id="các-bước" className="py-10 md:py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
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
  )
}