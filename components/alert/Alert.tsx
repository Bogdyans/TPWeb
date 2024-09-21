'use client'

import React, { createContext, useState, useContext, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XIcon } from 'lucide-react'

interface Alert {
  id: number
  message: string
  type: 'success' | 'error' | 'info'
}

interface AlertContextType {
  addAlert: (message: string, type: 'success' | 'error' | 'info') => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const useAlerts = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlerts must be used within an AlertProvider')
  }
  return context
}

const AlertComponent: React.FC<{ alert: Alert; onClose: () => void }> = ({ alert, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  const bgColor = 
    alert.type === 'success' ? 'bg-green-500' :
    alert.type === 'error' ? 'bg-red-500' : 'bg-blue-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: 50 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 50, x: 50 }}
      className={`${bgColor} text-white p-4 rounded-lg shadow-lg flex justify-between items-center`}
    >
      <span>{alert.message}</span>
      <button onClick={onClose} className="ml-4 focus:outline-none">
        <XIcon size={18} />
      </button>
    </motion.div>
  )
}

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([])

  const addAlert = useCallback((message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const newAlert: Alert = {
      id: Date.now(),
      message,
      type,
    }
    setAlerts((prevAlerts) => [...prevAlerts, newAlert])
  }, [])

  const removeAlert = useCallback((id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id))
  }, [])

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        <AnimatePresence>
          {alerts.map((alert) => (
            <AlertComponent
              key={alert.id}
              alert={alert}
              onClose={() => removeAlert(alert.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </AlertContext.Provider>
  )
}