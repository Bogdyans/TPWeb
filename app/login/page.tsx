'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import CodeBackground from '@/components/code'

export default function Component() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-cente p-4 mr-6 overflow-hidden">
<div className="absolute inset-0 overflow-hidden">
        <div className="blur-circle blur-circle-4"/>
        <div className="blur-circle blur-circle-5"/>
        
      </div>
      <div className="flex flex-row p-8 pt-24">

        <div className="w-full max-w-md space-y-8">

          <h1 className="text-8xl font-bold text-white text-center mb-6 ml-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100 text-glow">
              Sign In
            </span>
          </h1>

          <div className="relative">
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 px-4 py-2 text-sm text-white bg-gray-800 rounded-md focus:bg-white focus:text-grey-950 focus:ring-purple-500 placeholder-gray-500
              transition-all duration-300
              border-none
              ease-in-out transform
              hover:border
              "
              />
              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-ful h-12 px-4 py-2 text-sm text-white bg-gray-800 rounded-md focus:bg-white focus:text-grey-950 focus:ring-purple-500 placeholder-gray-500
              border-none
              transition-all duration-300
              ease-in-out transform  
              
              "
              />
            </form>
            <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-24  h-24 rounded-full flex items-center justify-center bg-gray-950'>
              <Button
                type="submit"
                className="
            absolute right-0 top-1/2 -translate-y-1/2 ml-12 w-24 h-24 rounded-full flex items-center justify-center
            hover:bg-white text-white hover:text-gray-950 border-purple-300 transition-all duration-300 ease-in-out transform 
            bg-gray-800
            border-solid
            border-gray-950
            border-4
            "
              >
                <ArrowRight className="w-6 h-6 text-glow" />
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Link href="/forgot-password" className="text-sm text-white hover:text-purple-100 transition-colors duration-200">
              Forgot your password? Click here!
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes soft-lighting {
          0%, 100% {
            text-shadow: 0 0 2px #e9d5ff, 0 0 4px #e9d5ff;
            box-shadow: 0 0 10px #9333ea, inset 0 0 10px #9333ea;
          }
          50% {
            text-shadow: 0 0 4px #fdf4ff, 0 0 8px #fdf4ff;
            box-shadow: 0 0 15px #a855f7, inset 0 0 15px #a855f7;
          }
        }
        .animate-soft-lighting {
          animation: soft-lighting 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}