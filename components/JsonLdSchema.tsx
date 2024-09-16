import React from 'react'
import Script from 'next/script'

const JsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HTFB - Dịch vụ Khôi phục Facebook Chuyên Nghiệp",
    "url": "https://htfb.vercel.app",
    "logo": "https://htfb.vercel.app/logo.png",
    "description": "Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối, giá cả hợp lý.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hà Nội",
      "addressCountry": "VN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84399173146",
      "contactType": "customer support"
    },
    "openingHours": "Mo-Su 00:00-24:00",
    "priceRange": "$$",
    "image": "https://htfb.vercel.app/images/support-team.jpg",
    "sameAs": [
      "https://zalo.me/0399173146",
      "https://facebook.com/htfb",
      "https://twitter.com/htfb",
      "https://instagram.com/htfb"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Dịch vụ khôi phục tài khoản Facebook",
      "price": "Liên hệ để biết giá",
      "priceCurrency": "VND"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "789"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://htfb.vercel.app"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dịch vụ Khôi phục Facebook",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Khôi phục tài khoản bị khóa",
            "description": "Dịch vụ khôi phục tài khoản Facebook bị khóa do vi phạm chính sách"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Khôi phục tài khoản bị hack",
            "description": "Dịch vụ khôi phục và bảo mật tài khoản Facebook bị hack"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bảo mật tài khoản Facebook",
            "description": "Dịch vụ tư vấn và triển khai các biện pháp bảo mật cho tài khoản Facebook"
          }
        }
      ]
    }
  }

  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

export default JsonLdSchema