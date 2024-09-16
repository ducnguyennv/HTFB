'use client'

import React from 'react'
import { NextSeo, WebPageJsonLd, OrganizationJsonLd, LocalBusinessJsonLd, FAQPageJsonLd } from 'next-seo'
import ScrollProgressBar from './ScrollProgressBar'
import ChatWidget from './ChatWidget'
import ScrollTopButton from './ScrollTopButton'

export function ClientComponents() {
  return (
    <>
      <NextSeo />
      <ScrollProgressBar />
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
      <OrganizationJsonLd
        type="Organization"
        id="https://htfb.vercel.app"
        name="HTFB"
        url="https://htfb.vercel.app"
        logo="https://htfb.vercel.app/logo.png"
        sameAs={[
          'https://www.facebook.com/htfb',
          'https://twitter.com/htfb'
        ]}
      />
      <LocalBusinessJsonLd
        type="LocalBusiness"
        id="https://htfb.vercel.app"
        name="HTFB"
        description="Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook"
        url="https://htfb.vercel.app"
        telephone="0399173146"
        address={{
          streetAddress: 'Hà Nội',
          addressLocality: 'Hà Nội',
          addressRegion: 'HN',
          postalCode: '100000',
          addressCountry: 'VN',
        }}
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "Làm thế nào để khôi phục tài khoản Facebook bị hack?",
            acceptedAnswerText: "Chúng tôi sử dụng các phương pháp an toàn và hiệu quả để khôi phục tài khoản Facebook bị hack. Quy trình bao gồm xác minh danh tính, liên hệ với Facebook, và áp dụng các biện pháp bảo mật nâng cao."
          },
        ]}
      />
    </>
  )
}