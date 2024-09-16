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
import Head from 'next/head'
import { NextSeo, WebPageJsonLd } from 'next-seo'

export default function ModernLandingPageVietnamese() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://htfb.vercel.app" />
        <link rel="alternate" hrefLang="vi" href="https://htfb.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="fWXO0bjp--QEfqTH_Ta2bgvhqlcg1sQ4tpuihXQlJYs" />
      </Head>
      <NextSeo
        title="Dịch vụ Khôi phục Tài khoản Facebook | Chuyên nghiệp & Uy tín | HTFB"
        description="Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối, giá cả hợp lý."
        openGraph={{
          type: 'website',
          locale: 'vi_VN',
          url: 'https://htfb.vercel.app',
          site_name: 'HTFB - Dịch vụ Khôi phục Facebook',
          title: 'Khôi phục Tài khoản Facebook | Chuyên nghiệp & Uy tín | HTFB',
          description: 'Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối.',
          images: [
            {
              url: 'https://htfb.vercel.app/images/support-team.jpg',
              width: 1200,
              height: 630,
              alt: 'HTFB - Đội ngũ hỗ trợ khôi phục tài khoản Facebook',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@htfb',
          site: '@htfb',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'khôi phục facebook, tài khoản bị hack, facebook bị khóa, bảo mật facebook, lấy lại tài khoản facebook, dịch vụ khôi phục facebook'
          },
          {
            name: 'author',
            content: 'Phạm Đức Long'
          },
          {
            name: 'application-name',
            content: 'HTFB'
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1'
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180'
          },
        ]}
      />
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
      <WebPageJsonLd
        id="https://htfb.vercel.app"
        description="Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối."
        lastReviewed="2023-07-06"
        reviewedBy={{
          type: "Person",
          name: "Phạm Đức Long"
        }}
      />
    </React.Fragment>
  )
}