'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { name: 'Trang Chủ', href: '#trang-chu' },
    { name: 'Dịch Vụ', href: '#dich-vu' },
    { name: 'Đánh Giá', href: '#danh-gia' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Liên Hệ', href: '#lien-he' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className={`text-2xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>HTFB</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className={`${isScrolled ? 'text-gray-600 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} transition-colors`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className={isScrolled ? 'text-gray-600' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-600' : 'text-white'} />}
        </Button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white shadow-lg fixed top-[64px] left-0 right-0 bottom-0 z-40"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block text-gray-600 hover:text-indigo-600 transition-colors text-lg py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}