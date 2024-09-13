import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactButton() {
  return (
    <Link href="https://zalo.me/0399173146" target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
      >
        Liên hệ ngay
      </motion.button>
    </Link>
  )
}