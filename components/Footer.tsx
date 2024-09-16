import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiZalo } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HTFB</h3>
            <p className="text-gray-300 mb-4">Dịch vụ khôi phục tài khoản Facebook chuyên nghiệp</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><Link href="#dich-vu"><span className="text-gray-300 hover:text-white transition-colors">Dịch vụ</span></Link></li>
              <li><Link href="#danh-gia"><span className="text-gray-300 hover:text-white transition-colors">Đánh giá</span></Link></li>
              <li><Link href="#faq"><span className="text-gray-300 hover:text-white transition-colors">FAQ</span></Link></li>
              <li><Link href="/chinh-sach-bao-mat"><span className="text-gray-300 hover:text-white transition-colors">Chính sách bảo mật</span></Link></li>
              <li><Link href="/dieu-khoan-su-dung"><span className="text-gray-300 hover:text-white transition-colors">Điều khoản sử dụng</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Liên hệ</h4>
            <p className="flex items-center text-gray-300 mb-2">
              <SiZalo className="mr-2" size={20} />
              <a href="https://zalo.me/0399173146" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Zalo: 0399173146</a>
            </p>
            <p className="flex items-center text-gray-300 mb-2">
              <FaPhoneAlt className="mr-2" size={20} />
              <a href="tel:0399173146" className="hover:text-white transition-colors">0399173146</a>
            </p>
            <p className="flex items-center text-gray-300">
              <MdEmail className="mr-2" size={20} />
              <a href="mailto:support@htfb.com" className="hover:text-white transition-colors">support@htfb.com</a>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {currentYear} HTFB. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}