import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">HTFB</h3>
            <p>Dịch vụ khôi phục tài khoản Facebook chuyên nghiệp</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Liên kết nhanh</h4>
            <ul>
              <li><Link href="#dich-vu" className="hover:text-blue-400 transition-colors">Dịch vụ</Link></li>
              <li><Link href="#danh-gia" className="hover:text-blue-400 transition-colors">Đánh giá</Link></li>
              <li><Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Liên hệ</h4>
            <p>Zalo: <a href="https://zalo.me/0399173146" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">0399173146</a></p>
            <p>Email: <a href="mailto:support@htfb.com" className="hover:text-blue-400 transition-colors">support@htfb.com</a></p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} HTFB. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}