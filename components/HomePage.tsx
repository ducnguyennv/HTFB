'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import FAQSchema from './FAQSchema'
import ErrorBoundary from './ErrorBoundary'

const ServicesSection = dynamic(() => import('./ServicesSection'), { suspense: true })
const FAQSection = dynamic(() => import('./FAQSection'), { suspense: true })
const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), { suspense: true })
const ContactSection = dynamic(() => import('./ContactSection'), { suspense: true })

const LoadingFallback = () => <div>Loading...</div>

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <FAQSection />
        </Suspense>
      </main>
      <Footer />
      <FAQSchema />
    </ErrorBoundary>
  )
}