import MotionButton from '../app/components/MotionButton'

export default function ContactButton() {
  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg"
      aria-label="Liên hệ ngay"
    >
      Liên hệ ngay
    </MotionButton>
  )
}