'use client'
import React from 'react'
import MotionDiv from './MotionDiv'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-purple-600">FB Recovery</h1>
        </MotionDiv>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="text-gray-600 hover:text-purple-600">Dịch vụ</a></li>
            <li><a href="#workflow" className="text-gray-600 hover:text-purple-600">Quy trình</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-purple-600">FAQ</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-purple-600">Liên hệ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}