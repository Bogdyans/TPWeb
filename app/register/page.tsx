'use client'

import { useState } from 'react'
import Link from 'next/link'


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

import CodeBackground from '@/components/code'
import { useAlerts } from '@/components/alert/Alert'
import { register } from '@/api/authorisation'
import { useRouter } from 'next/navigation'



export default function Component() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter(); 

  const { addAlert } = useAlerts();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8){
      addAlert("Password length must be more than 8", "error")
      return;
    }

    if (password != cpassword){
      addAlert("Passwords do not match", "error")
      return;
    }

    try {
      await register(username, mail, password);
      addAlert("Registration successful!", "success");
      
      router.push('/');
    } catch {
      addAlert("Registration failed!", "error");
    }
  };




  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-cente p-4 mr-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="blur-circle blur-circle-4" />
        <div className="blur-circle blur-circle-5" />

      </div>
      <div className="flex flex-row p-8 pt-24">

        <div className="w-full max-w-md space-y-8">

          <h1 className="text-8xl font-bold text-white text-center mb-6 ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100 text-glow">
              Sign Up
            </span>
          </h1>

          <div className="relative">
            <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 px-4 py-2 text-sm text-white bg-gray-800 rounded-md focus:bg-white focus:text-gray-900 placeholder-gray-500
              transition-all duration-300
              border-none
              ease-in-out transform
              "
              />
              <Input
                type="email"
                placeholder="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-full h-12 px-4 py-2 text-sm text-white bg-gray-800 rounded-md focus:bg-white focus:text-gray-900 placeholder-gray-500
              transition-all duration-300
              border-none
              ease-in-out transform
              "
              />
              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-ful h-12 px-4 py-2 text-sm text-white bg-gray-800 rounded-md focus:bg-white focus:text-gray-900 placeholder-gray-500
              border-none
              transition-all duration-300
              ease-in-out transform  
              "
              />
              <Input
                type="password"
                placeholder="confirm password"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                className="w-ful h-12 px-4 py-2 text-sm text-white bg-gray-800 rounded-md focus:bg-white focus:text-gray-900 placeholder-gray-500
              border-none
              transition-all duration-300
              ease-in-out transform  
              "
              />
            </form>
            <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-24  h-24 rounded-full flex items-center justify-center bg-gray-950'>
              <Button
                type="submit"
                className={`
            absolute right-0 top-1/2 -translate-y-1/2 ml-12 w-24 h-24 rounded-full flex items-center justify-center
            hover:bg-white text-white hover:text-gray-950 border-purple-300 transition-all duration-300 ease-in-out transform 
            bg-gray-800
            border-solid
            border-gray-950
            border-4
            
            `}
            onClick={(e) => handleSubmit(e)}
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
          @keyframes click-animation {
          0% { transform: scale(1) translateY(-50%); }
          50% { transform: scale(0.95) translateY(-50%); }
          100% { transform: scale(1) translateY(-50%); }
        }
        .animate-click {
          animation: click-animation 0.5s ease-in;
        }
      `}</style>
    </div>
  )
}