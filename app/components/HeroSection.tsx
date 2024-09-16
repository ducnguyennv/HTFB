'use client'
import React from 'react'
import MotionDiv from './MotionDiv'
import MotionButton from './MotionButton'

export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white relative bg-cover bg-center" style={{backgroundImage: "url('/images/hero-background.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Mất quyền truy cập vào Facebook?</h1>
          <p className="text-xl mb-8">
            Đừng lo lắng, đội ngũ chuyên gia của chúng tôi sẽ giúp bạn lấy lại quyền kiểm soát cuộc sống kỹ thuật số của mình. 
            Với nhiều năm kinh nghiệm và tỷ lệ thành công cao, chúng tôi cam kết mang lại giải pháp hiệu quả và nhanh chóng cho bạn.
          </p>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg"
          >
            Liên hệ ngay
          </MotionButton>
        </MotionDiv>
      </div>
    </section>
  )
}