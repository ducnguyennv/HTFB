'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

export default function MotionButton({ children, ...props }: MotionButtonProps) {
  return <motion.button {...props}>{children}</motion.button>
}