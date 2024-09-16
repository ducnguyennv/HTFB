'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Skeleton } from "./ui/skeleton"
import ContactButton from './ContactButton'
import { motion } from 'framer-motion'

const HeroSection = React.memo(() => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="trang-chu" className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        {isLoading ? (
          <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Dịch Vụ Khôi Phục Tài Khoản Facebook Chuyên Nghiệp
          </motion.h1>
        )}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl mb-10 text-gray-700 max-w-2xl mx-auto"
        >
          Đội ngũ chuyên gia của chúng tôi sẽ giúp bạn lấy lại quyền kiểm soát tài khoản Facebook bị hack hoặc khóa. Tỷ lệ thành công trên 99%, hỗ trợ 24/7.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ContactButton />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto relative">
            <Image
              src="/images/customer1.png"
              alt="Khôi phục tài khoản Facebook"
              width={800}
              height={600}
              priority
              fetchPriority="high"
              className="rounded-lg shadow-xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection