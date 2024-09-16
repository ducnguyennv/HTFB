import type { Metadata, Viewport } from 'next'
import './globals.css'
import JsonLdSchema from '../components/JsonLdSchema'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Dịch vụ Khôi phục Tài khoản Facebook | Chuyên nghiệp & Uy tín | HTFB',
  description: 'Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối, giá cả hợp lý.',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://htfb.vercel.app',
    siteName: 'HTFB - Dịch vụ Khôi phục Facebook',
    title: 'Khôi phục Tài khoản Facebook | Chuyên nghiệp & Uy tín | HTFB',
    description: 'Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối.',
    images: [
      {
        url: 'https://htfb.vercel.app/images/support-team.jpg',
        width: 1200,
        height: 630,
        alt: 'HTFB - Đội ngũ hỗ trợ khôi phục tài khoản Facebook',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@htfb',
  },
  alternates: {
    canonical: 'https://htfb.vercel.app',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'fWXO0bjp--QEfqTH_Ta2bgvhqlcg1sQ4tpuihXQlJYs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <JsonLdSchema />
        {/* Các thẻ meta khác */}
      </head>
      <body>{children}</body>
    </html>
  )
}