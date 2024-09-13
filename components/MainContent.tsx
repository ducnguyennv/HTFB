'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent } from "./ui/card"
import { Facebook, Mail, Phone, Menu, X, CheckCircle, AlertTriangle, Lock, Shield, MessageCircle, DollarSign, Play, CheckSquare, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from 'next/image'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { motion } from 'framer-motion'
import { Skeleton } from "./ui/skeleton"

export default function MainContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const ContactButton = () => (
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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3)
  }

  const testimonials = useMemo(() => [
    {
      name: "Nguyễn Văn A",
      position: "Chủ doanh nghiệp",
      comment: "Dịch vụ khôi phục tài khoản Facebook của họ thật sự xuất sắc. Tôi đã lấy lại được tài khoản quan trọng của mình chỉ trong vòng 30 phút. Đội ngũ hỗ trợ rất chuyên nghiệp và hiệu quả.",
      image: "/images/customer1.png",
      rating: 5
    },
    // ... other testimonials
  ], []);

  return (
    <main className="flex-grow">
      {/* Paste your existing main content here */}
      {/* This should include all your sections like Home, Services, Steps, FAQ, etc. */}
    </main>
  )
}