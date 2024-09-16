'use client'

import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Skeleton } from "./ui/skeleton"
import ContactButton from './ContactButton'
import { motion } from 'framer-motion'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <section id="trang-chủ" className="py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        {isLoading ? (
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Khôi Phục Tài Khoản Facebook Của Bạn
          </motion.h1>
        )}
        <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
          Mất quyền truy cập vào Facebook? Đừng lo lắng, đội ngũ chuyên gia của chúng tôi sẽ giúp bạn lấy lại quyền kiểm soát cuộc sống kỹ thuật số của mình. Với nhiều năm kinh nghiệm và tỷ lệ thành công cao, chúng tôi cam kết mang lại giải pháp hiệu quả và nhanh chóng cho bạn.
        </p>
        <ContactButton />
        <div className="mt-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto relative">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                <Skeleton className="w-full h-64 sm:h-80 md:h-96" />
              </div>
            )}
            <LazyLoadImage
              src="/images/customer1.png"
              alt="Khôi phục tài khoản Facebook"
              effect="blur"
              afterLoad={handleImageLoad}
              onError={(e) => console.error("Lỗi tải hình ảnh:", e)}
              className={`rounded-lg shadow-lg w-full h-auto object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              wrapperClassName="block"
            />
          </div>
        </div>
        <ContactButton />
      </div>
    </section>
  )
}