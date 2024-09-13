import React from 'react'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khôi Phục Tài Khoản Facebook | Dịch Vụ Chuyên Nghiệp',
  description: 'Dịch vụ khôi phục tài khoản Facebook chuyên nghiệp, nhanh chóng và an toàn. Đội ngũ chuyên gia với tỷ lệ thành công cao, hỗ trợ 24/7.',
  keywords: 'khôi phục facebook, lấy lại tài khoản facebook, bảo mật facebook, hack facebook',
  openGraph: {
    title: 'Khôi Phục Tài Khoản Facebook | Dịch Vụ Chuyên Nghiệp',
    description: 'Dịch vụ khôi phục tài khoản Facebook chuyên nghiệp, nhanh chóng và an toàn. Đội ngũ chuyên gia với tỷ lệ thành công cao, hỗ trợ 24/7.',
    images: [{ url: '/images/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}