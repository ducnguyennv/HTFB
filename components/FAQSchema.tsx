import React from 'react'
import Script from 'next/script'

const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Làm thế nào để khôi phục tài khoản Facebook bị khóa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chúng tôi sử dụng các phương pháp chuyên nghiệp và an toàn để khôi phục tài khoản Facebook bị khóa. Quy trình bao gồm xác minh danh tính, gửi yêu cầu xem xét và làm việc trực tiếp với đội ngũ hỗ trợ của Facebook."
        }
      },
      {
        "@type": "Question",
        "name": "Mất bao lâu để khôi phục tài khoản Facebook?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thời gian khôi phục tài khoản Facebook có thể khác nhau tùy thuộc vào tình trạng cụ thể. Thông thường, quá trình này có thể mất từ 24 giờ đến vài ngày. Chúng tôi luôn cố gắng giải quyết vấn đề nhanh nhất có thể."
        }
      },
      {
        "@type": "Question",
        "name": "Dịch vụ của bạn có an toàn không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, dịch vụ của chúng tôi hoàn toàn an toàn và tuân thủ các quy định của Facebook. Chúng tôi không yêu cầu mật khẩu của bạn và sử dụng các phương pháp được Facebook chấp thuận để hỗ trợ khôi phục tài khoản."
        }
      }
    ]
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

export default FAQSchema