import React from 'react'
import Script from 'next/script'

const JsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HTFB - Dịch vụ Khôi phục Facebook",
    "url": "https://htfb.vercel.app",
    "description": "Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối, giá cả hợp lý.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://htfb.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="beforeInteractive"
    />
  )
}

export default JsonLdSchema