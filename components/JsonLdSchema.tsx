import React from 'react'
import Script from 'next/script'

const JsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HTFB - Dịch vụ Khôi phục Facebook Chuyên Nghiệp",
    "url": "https://htfb.vercel.app",
    // ... (các thông tin khác)
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Tin Tức",
        "description": "Cập nhật tin tức mới nhất về bảo mật Facebook, các phương pháp khôi phục tài khoản và xu hướng mạng xã hội.",
        "url": "https://htfb.vercel.app/tin-tuc"
      }
    ]
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