"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {useRouter} from 'next/navigation'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import FixedAvatar from '@/components/fixedavatar'
import CodeBackground from '@/components/code';


export default function Component() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gray-950 flex flex-col overflow-hidden">
      {/* <Navbar /> */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blur-circle blur-circle-1"></div>
        <div className="blur-circle blur-circle-2"></div>
        <div className="blur-circle blur-circle-3"></div>
      </div>
      <div className="flex flex-row p-8 pt-24">
        <CodeBackground />

        <div className="z-10 w-1/2 flex flex-col justify-center space-y-8 pl-16 ml-11 mt-6">
          <h1 className="text-8xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100 ">
              Welcome
            </span>
          </h1>
          <div className="text-white space-y-6 mb-8">
            <p className="max-w-lg text-xl text-glow">
              Organize your thoughts, capture your ideas, and unleash your productivity with our powerful note-taking platform. Whether you're a student, a professional, or simply someone who loves to keep track of their daily tasks and notes, Amethyst is the perfect tool to help you stay organized and focused.
            </p>
            <p className="max-w-lg text-xl text-glow">
              Get started today and unlock the full potential of your ideas. Sign up now or log in to begin your journey with Note Wizard.
            </p>
          </div>
        </div>

        <div className="z-10 w-1/2 flex flex-col justify-center items-center space-y-8 mr-7 pr-5">
          <Button
            variant="outline"
            className="animate-soft-lighting w-3/5 h-1/6 bg-gray-950 hover:bg-white text-white hover:text-gray-950 border-purple-300 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_10px_#a855f7,inset_0_0_10px_#a855f7] hover:shadow-[0_0_20px_#ffffff,inset_0_0_20px_#ffffff] text-4xl"
            onClick={() => { }}
            
          >
            Sign Up
          </Button>
          <div className="text-glow animate-bounce text-white text-center w-3/5 text-3xl">or</div>
          
          <Button
            variant="outline"
            className="animate-soft-lighting w-3/5 h-1/6 bg-gray-950 hover:bg-white text-white hover:text-gray-950 border-purple-300 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_10px_#9333ea,inset_0_0_10px_#9333ea] hover:shadow-[0_0_20px_#ffffff,inset_0_0_20px_#ffffff] text-4xl"
            onClick={() => router.push('/login')}
          >
            Log In
          </Button>
          
          
        </div>
      </div>
    </div>

  )
}

