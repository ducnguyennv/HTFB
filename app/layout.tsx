import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khôi Phục Tài Khoản Facebook',
  description: 'Dịch vụ chuyên nghiệp giúp bạn khôi phục tài khoản Facebook bị mất',
  openGraph: {
    images: [
      {
        url: '/images/facebook-recovery.jpg',
        width: 600,
        height: 400,
        alt: 'Khôi phục tài khoản Facebook',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}