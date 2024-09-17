'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import ErrorBoundary from './ErrorBoundary'

const ServicesSection = dynamic(() => import('./ServicesSection'), { suspense: true })
const WorkflowSection = dynamic(() => import('./WorkflowSection'), { suspense: true })
const FAQSection = dynamic(() => import('./FAQSection'), { suspense: true })
const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), { suspense: true })
const ContactSection = dynamic(() => import('./ContactSection'), { suspense: true })

const LoadingFallback = () => <div>Loading...</div>

interface HomePageProps {
  children?: React.ReactNode;
}

export default function HomePage({ children }: HomePageProps) {
  return (
    <ErrorBoundary>
      <Header />
      <main>
        {children ? (
          <Suspense fallback={<LoadingFallback />}>
            {children}
          </Suspense>
        ) : (
          <>
            <HeroSection />
            <Suspense fallback={<LoadingFallback />}>
              <ServicesSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <WorkflowSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <TestimonialsSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <FAQSection />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <ContactSection />
            </Suspense>
          </>
        )}
      </main>
      <Footer />
    </ErrorBoundary>
  )
}