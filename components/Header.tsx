'use client'

import React, { useState } from 'react'
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['Trang Chủ', 'Dịch Vụ', 'Các Bước', 'Câu Hỏi Thường Gặp', 'Liên Hệ']

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
      {/* Header content */}
    </header>
  )
}