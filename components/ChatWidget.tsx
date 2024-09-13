import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from "lucide-react"

export default function ChatWidget() {
  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="https://zalo.me/0399173146" target="_blank" rel="noopener noreferrer">
        <button
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
        >
          <MessageCircle size={24} />
          <span className="ml-2 hidden md:inline">Chat với chúng tôi</span>
        </button>
      </Link>
    </motion.div>
  )
}