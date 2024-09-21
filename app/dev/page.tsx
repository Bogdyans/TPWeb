'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XIcon } from 'lucide-react'

interface Alert {
  id: number
  message: string
  type: 'success' | 'error' | 'info'
}

const AlertComponent: React.FC<{ alert: Alert; onClose: () => void }> = ({ alert, onClose }) => {
  useEffect(() => {
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

export default function Component() {
  const [alerts, setAlerts] = useState<Alert[]>([])

  const addAlert = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const newAlert: Alert = {
      id: Date.now(),
      message,
      type,
    }
    setAlerts((prevAlerts) => [...prevAlerts, newAlert])
  }

  const removeAlert = (id: number) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id))
  }

  // Example usage
  const handleLogin = () => {
    // Simulating a login with a short password
    const password = "12333333"
    if (password.length < 8) {
      addAlert("Password is too short. It should be at least 8 characters long.", "error")
    } else {
      addAlert("Login successful!", "success")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Alert Notification System</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Simulate Login
      </button>
      <div className="fixed bottom-4 right-4 space-y-2">
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
    </div>
  )
}