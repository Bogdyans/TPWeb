'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isFirstMount, setIsFirstMount] = useState(true)

  useEffect(() => {
    setIsFirstMount(false)
  }, [])

  return (
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     key={pathname}
    //     initial="initialState"
    //     animate="animateState"
    //     exit="exitState"
    //     variants={{
    //       initialState: {
    //         backgroundColor: '#000',
    //       },
    //       animateState: {
    //         backgroundColor: '#fff',
    //       },
    //       exitState: {
    //         backgroundColor: '#000',
    //       },
    //     }}
    //     transition={{
    //       duration: 0.75,
    //       ease: "easeInOut",
    //     }}
    //     className="fixed inset-0 z-50"
    //   />
    //   <motion.main
    //     key={`${pathname}-content`}
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0 }}
    //     transition={{
    //       duration: 0.5,
    //       delay: 0.5,
    //     }}
    //     className="relative z-10"
    //   >
    //     {children}
    //   </motion.main>
    // </AnimatePresence>
    <div>
  {children}
    </div>
    )
}