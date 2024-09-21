"use client"

import React, { useState, useCallback, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Create a context for the alert
const AlertContext = createContext<((message: string) => void) | null>(null)

// Provider component
export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState('')

  const showAlert = useCallback((msg: string) => {
    setMessage(msg)
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 5000)
    console.log("Hello") // Hide after 5 seconds
  }, [])

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 w-80 z-50"
          >
            <Alert variant="default">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Notification</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </AlertContext.Provider>
  )
}

// Hook to use the alert
export function useAlert() {
  const context = useContext(AlertContext)
  if (context === null) {
    throw new Error('useAlert must be used within an AlertProvider')
  }
  return context
}