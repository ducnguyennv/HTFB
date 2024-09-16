'use client'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import WorkflowSection from './WorkflowSection'
import FAQSection from './FAQSection'
import TestimonialsSection from './TestimonialsSection'
import ComparisonSection from './ComparisonSection'
import ContactSection from './ContactSection'

export default function HomePage() {
  return (
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
  )
}