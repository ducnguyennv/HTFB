'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import WorkflowSection from '../components/WorkflowSection'
import FAQSection from '../components/FAQSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ComparisonSection from '../components/ComparisonSection'
import ContactSection from '../components/ContactSection'
import ChatWidget from '../components/ChatWidget'
import ScrollTopButton from '../components/ScrollTopButton'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ModernLandingPageVietnamese() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <React.Fragment>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-50"
        style={{ scaleX }}
      />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <WorkflowSection />
          <FAQSection />
          <TestimonialsSection />
          <ComparisonSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <ChatWidget />
      <ScrollTopButton />
    </React.Fragment>
  )
}