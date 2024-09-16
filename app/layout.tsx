import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JsonLdSchema from '../components/JsonLdSchema'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Dịch vụ Khôi phục Tài khoản Facebook | Chuyên nghiệp & Uy tín | HTFB',
    template: '%s | HTFB'
  },
  description: 'Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối, giá cả hợp lý.',
  keywords: ['khôi phục facebook', 'tài khoản bị hack', 'khóa facebook', 'dịch vụ facebook'],
  authors: [{ name: 'HTFB Team' }],
  creator: 'HTFB',
  publisher: 'HTFB',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'fWXO0bjp--QEfqTH_Ta2bgvhqlcg1sQ4tpuihXQlJYs',
  },
  manifest: '/manifest.json',
  themeColor: '#3b82f6',
  metadataBase: new URL('https://htfb.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={inter.className}>
      <head>
        <JsonLdSchema />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/images/customer1.png" as="image" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Các thẻ meta khác */}
      </head>
      <body>{children}</body>
    </html>
  )
}