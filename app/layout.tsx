import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JsonLdSchema from '../components/JsonLdSchema'
import FAQSchema from '../components/FAQSchema'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://htfb.vercel.app'),
  title: {
    default: 'Dịch vụ Khôi phục Tài khoản Facebook Chuyên Nghiệp | HTFB',
    template: '%s | Dịch vụ Khôi phục Facebook HTFB'
  },
  description: 'Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối, giá cả hợp lý. Liên hệ ngay!',
  keywords: ['khôi phục facebook', 'tài khoản bị hack', 'khóa facebook', 'dịch vụ facebook', 'lấy lại tài khoản facebook', 'mở khóa facebook', 'bảo mật facebook'],
  authors: [{ name: 'HTFB Team', url: 'https://htfb.vercel.app' }],
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
    siteName: 'HTFB - Dịch vụ Khôi phục Facebook Chuyên Nghiệp',
    title: 'Khôi phục Tài khoản Facebook | Chuyên nghiệp & Uy tín | HTFB',
    description: 'Dịch vụ chuyên nghiệp khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công trên 99%. Hỗ trợ 24/7, bảo mật tuyệt đối.',
    images: [
      {
        url: 'https://htfb.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HTFB - Đội ngũ hỗ trợ khôi phục tài khoản Facebook',
      },
    ],
    countryName: 'Vietnam',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@htfb',
    creator: '@htfb',
    title: 'Dịch vụ Khôi phục Tài khoản Facebook Chuyên Nghiệp | HTFB',
    description: 'Khôi phục tài khoản Facebook bị hack, khóa với tỷ lệ thành công cao. Hỗ trợ 24/7, bảo mật tuyệt đối.',
    images: ['https://htfb.vercel.app/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://htfb.vercel.app',
    languages: {
      'en-US': 'https://htfb.vercel.app/en',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
  category: 'technology',
  classification: 'Facebook Account Recovery Service',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'fWXO0bjp--QEfqTH_Ta2bgvhqlcg1sQ4tpuihXQlJYs',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
    other: {
      me: ['support@htfb.com', 'https://htfb.vercel.app'],
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}