import Link from 'next/link'
import Image from 'next/image'

// Giả lập dữ liệu tin tức
const newsItems = [
  {
    id: 1,
    title: 'Cách bảo vệ tài khoản Facebook khỏi bị hack',
    excerpt: 'Tìm hiểu các phương pháp hiệu quả để bảo vệ tài khoản Facebook của bạn khỏi bị hack. Hướng dẫn chi tiết từ chuyên gia HTFB.',
    date: '2024-03-22',
    slug: 'cach-bao-ve-tai-khoan-facebook-khoi-bi-hack'
  },
  // Thêm các mục tin tức khác
]

export default function NewsList() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={`/images/news/${item.slug}.jpg`}
              alt={item.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/tin-tuc/${item.slug}`} className="hover:text-blue-600 transition-colors">
                  {item.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <time dateTime={item.date} className="text-sm text-gray-500">
                {new Date(item.date).toLocaleDateString('vi-VN')}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}