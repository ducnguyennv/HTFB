import { Metadata } from 'next'
import Image from 'next/image'
import { FaLock, FaShieldAlt, FaMobileAlt, FaLink, FaUserCog, FaWifi } from 'react-icons/fa'
import HomePage from '@/components/HomePage'

export const metadata: Metadata = {
  title: 'Cách Bảo Vệ Tài Khoản Facebook Khỏi Bị Hack | HTFB',
  description: 'Hướng dẫn chi tiết các biện pháp bảo vệ tài khoản Facebook của bạn khỏi bị hack. Tìm hiểu cách thiết lập bảo mật mạnh mẽ và nhận biết các mối đe dọa tiềm ẩn.',
  openGraph: {
    title: 'Cách Bảo Vệ Tài Khoản Facebook Khỏi Bị Hack | HTFB',
    description: 'Hướng dẫn chi tiết các biện pháp bảo vệ tài khoản Facebook của bạn khỏi bị hack. Tìm hiểu cách thiết lập bảo mật mạnh mẽ và nhận biết các mối đe dọa tiềm ẩn.',
    url: 'https://htfb.vercel.app/tin-tuc/cach-bao-ve-tai-khoan-facebook-khoi-bi-hack',
    siteName: 'HTFB',
    locale: 'vi_VN',
    type: 'article',
  },
}

function ArticleContent() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Cách bảo vệ tài khoản Facebook khỏi bị hack</h1>
      
      <Image
        src="/images/news/cach-bao-ve-tai-khoan-facebook-khoi-bi-hack.jpg"
        alt="Bảo vệ tài khoản Facebook"
        width={800}
        height={400}
        className="rounded-lg shadow-lg mb-6 mx-auto"
      />
      
      <p className="text-gray-600 mb-8 text-center">Đăng ngày: 22 tháng 3, 2024</p>
      
      <div className="prose max-w-none bg-white p-8 rounded-lg shadow-md">
        <p className="lead text-xl mb-6">
          Trong thời đại số hóa ngày nay, việc bảo vệ tài khoản mạng xã hội, đặc biệt là Facebook, trở nên quan trọng hơn bao giờ hết. Dưới đây là những biện pháp hiệu quả giúp bạn bảo vệ tài khoản Facebook khỏi bị hack:
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start">
            <FaLock className="text-3xl text-indigo-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. Sử dụng mật khẩu mạnh và độc đáo</h2>
              <p>
                Tạo mật khẩu phức tạp, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt. Tránh sử dụng thông tin cá nhân dễ đoán như ngày sinh hoặc tên người thân.
              </p>
            </div>
          </div>
          
          {/* Repeat this pattern for other sections */}
          {/* ... */}
          
        </div>
        
        <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Kết luận</h2>
          <p>
            Bảo vệ tài khoản Facebook là một quá trình liên tục. Bằng cách áp dụng các biện pháp trên, bạn có thể giảm thiểu đáng kể nguy cơ bị hack. Nếu bạn cảm thấy tài khoản của mình đang gặp nguy hiểm hoặc đã bị xâm phạm, đừng ngần ngại liên hệ với đội ngũ chuyên gia của HTFB để được hỗ trợ kịp thời.
          </p>
        </div>
      </div>
    </article>
  )
}

export default function ProtectFacebookAccountPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Cách bảo vệ tài khoản Facebook khỏi bị hack</h1>
      
      <Image
        src="/images/news/cach-bao-ve-tai-khoan-facebook-khoi-bi-hack.jpg"
        alt="Bảo vệ tài khoản Facebook"
        width={800}
        height={400}
        className="rounded-lg shadow-lg mb-6 mx-auto"
      />
      
      <p className="text-gray-600 mb-8 text-center">Đăng ngày: 22 tháng 3, 2024</p>
      
      <div className="prose max-w-none bg-white p-8 rounded-lg shadow-md">
        <p className="lead text-xl mb-6">
          Trong thời đại số hóa ngày nay, việc bảo vệ tài khoản mạng xã hội, đặc biệt là Facebook, trở nên quan trọng hơn bao giờ hết. Dưới đây là những biện pháp hiệu quả giúp bạn bảo vệ tài khoản Facebook khỏi bị hack:
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start">
            <FaLock className="text-3xl text-indigo-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">1. Sử dụng mật khẩu mạnh và độc đáo</h2>
              <p>
                Tạo mật khẩu phức tạp, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt. Tránh sử dụng thông tin cá nhân dễ đoán như ngày sinh hoặc tên người thân.
              </p>
            </div>
          </div>
          
          {/* Thêm các phần khác tương tự ở đây */}
          
        </div>
        
        <div className="mt-12 p-6 bg-indigo-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Kết luận</h2>
          <p>
            Bảo vệ tài khoản Facebook là một quá trình liên tục. Bằng cách áp dụng các biện pháp trên, bạn có thể giảm thiểu đáng kể nguy cơ bị hack. Nếu bạn cảm thấy tài khoản của mình đang gặp nguy hiểm hoặc đã bị xâm phạm, đừng ngần ngại liên hệ với đội ngũ chuyên gia của HTFB để được hỗ trợ kịp thời.
          </p>
        </div>
      </div>
    </main>
  )
}