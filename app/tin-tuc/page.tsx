import { Metadata } from 'next'
import Link from 'next/link'
import NewsList from '@/components/NewsList'

export const metadata: Metadata = {
  title: 'Cách Lấy Lại Facebook Bị Hack | HTFB - Dịch vụ Khôi phục Facebook',
  description: 'Hướng dẫn chi tiết cách lấy lại Facebook bị hack, bị mất hoặc bị hách. Các phương pháp hiệu quả để khôi phục tài khoản Facebook của bạn.',
  openGraph: {
    title: 'Cách Lấy Lại Facebook Bị Hack | HTFB - Dịch vụ Khôi phục Facebook',
    description: 'Hướng dẫn chi tiết cách lấy lại Facebook bị hack, bị mất hoặc bị hách. Các phương pháp hiệu quả để khôi phục tài khoản Facebook của bạn.',
    url: 'https://htfb.vercel.app/tin-tuc',
    type: 'website',
  },
}

const sitelinks = [
  { title: "Cách lấy lại Facebook bị hack", slug: "cach-lay-lai-facebook-bi-hack", description: "Hướng dẫn từng bước để khôi phục tài khoản Facebook bị hack" },
  { title: "Phương pháp khôi phục Facebook bị mất", slug: "phuong-phap-khoi-phuc-facebook-bi-mat", description: "Các giải pháp hiệu quả để lấy lại quyền truy cập vào tài khoản Facebook bị mất" },
  { title: "Giải pháp cho tài khoản Facebook bị hách", slug: "giai-phap-cho-tai-khoan-facebook-bi-hach", description: "Cách xử lý khi tài khoản Facebook của bạn bị xâm nhập trái phép" },
  { title: "Hướng dẫn bảo vệ tài khoản Facebook", slug: "huong-dan-bao-ve-tai-khoan-facebook", description: "Các biện pháp phòng ngừa để tránh bị hack Facebook trong tương lai" },
  { title: "Các bước lấy lại quyền kiểm soát Facebook", slug: "cac-buoc-lay-lai-quyen-kiem-soat-facebook", description: "Quy trình toàn diện để khôi phục và bảo vệ tài khoản Facebook của bạn" },
]

export default function NewsPage() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center my-8">Cách Lấy Lại Facebook Bị Hack</h1>
      <p className="text-center mb-8">Tìm hiểu các phương pháp hiệu quả để khôi phục tài khoản Facebook bị hack, bị mất hoặc bị hách</p>
      <nav className="container mx-auto px-4 mb-12">
        <ul className="space-y-4">
          {sitelinks.map((link, index) => (
            <li key={index}>
              <Link href={`/tin-tuc/${link.slug}`} className="block p-4 border rounded-lg hover:bg-gray-100 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{link.title}</h2>
                <p className="text-gray-600">{link.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <NewsList />
    </main>
  )
}