import Link from 'next/link'

export default function ContactButton() {
  return (
    <Link href="https://zalo.me/0399173146" passHref legacyBehavior>
      <a
        className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ qua Zalo"
      >
        Liên hệ ngay
      </a>
    </Link>
  )
}