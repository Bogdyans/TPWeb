"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import FixedAvatar from '@/components/fixedavatar'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBackground = () => {
    const [code, setCode] = useState('')

        useEffect(() => {
            const codeLines = [
                '<div class="container">', 
                '  <header>', 
                '    <h1>Random Website</h1>', 
                '    <nav>', 
                '      <ul>', 
                '        <li><a href="#home">Home</a></li>', 
                '        <li><a href="#about">About</a></li>', 
                '        <li><a href="#services">Services</a></li>', 
                '        <li><a href="#contact">Contact</a></li>', 
                '      </ul>', 
                '    </nav>', 
                '  </header>', 
                '', 
                '  <section id="home">', 
                '    <h2>Welcome to Our Website</h2>', 
                '    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>', 
                '    <button class="btn btn-primary">Learn More</button>', 
                '  </section>', 
                '', 
                '  <section id="about">', 
                '    <h2>About Us</h2>', 
                '    <p>Curabitur imperdiet nulla ut libero dictum, ac dapibus velit suscipit.</p>', 
                '  </section>', 
                '', 
                '  <section id="services">', 
                '    <h2>Our Services</h2>', 
                '    <ul>', 
                '      <li>Web Development</li>', 
                '      <li>Mobile App Design</li>', 
                '      <li>SEO Optimization</li>', 
                '    </ul>', 
                '  </section>', 
                '', 
              ]
              
      
          let currentLine = 0
          let currentChar = 0
      
          const intervalId = setInterval(() => {
            if (currentLine < codeLines.length) {
              if (currentChar < codeLines[currentLine].length) {
                const charToAdd = codeLines[currentLine][currentChar]
                setCode((prev) => prev + charToAdd)
                currentChar++
              } else {
                setCode((prev) => prev + '\n')
                currentLine++
                currentChar = 0
              }
            } else {
              clearInterval(intervalId)
            }
          }, 60)
      
          return () => clearInterval(intervalId)
        }, [])
      
        return (
          <pre className="z-10 ml-20 mt-20 pl-20 absolute inset-0 overflow-hidden text-gray-500 opacity-20 blur(8px) font-mono text-xl whitespace-pre">
            {code}
          </pre>
        )
}

export default function Component() {

  return (
    <div className="relative min-h-screen bg-gray-950 flex flex-row p-8 overflow-hidden">
      <CodeBackground />
      
      <div className="z-10 w-1/2 flex flex-col justify-center space-y-8 pl-16 ml-5">
        <h1 className="text-8xl font-bold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100 ">
            Welcome
          </span>
        </h1>
        <div className="text-white space-y-6 mb-8">
          <p className="max-w-lg text-xl text-glow">
          Organize your thoughts, capture your ideas, and unleash your productivity with our powerful note-taking platform. Whether you're a student, a professional, or simply someone who loves to keep track of their daily tasks and notes, Note Wizard is the perfect tool to help you stay organized and focused.
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
          onClick={() => {}}
        >
          Sign Up
        </Button>
        <div className="text-glow animate-bounce text-white text-center w-3/5 text-3xl">or</div>
        <Button 
          variant="outline"
          className="animate-soft-lighting w-3/5 h-1/6 bg-gray-950 hover:bg-white text-white hover:text-gray-950 border-purple-300 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_10px_#9333ea,inset_0_0_10px_#9333ea] hover:shadow-[0_0_20px_#ffffff,inset_0_0_20px_#ffffff] text-4xl"
          onClick={() => {}}
        >
          Log In
        </Button>
        <FixedAvatar />
      </div>
      <style jsx global>{`
        @keyframes soft-lighting {
          0%, 100% {
            text-shadow: 0 0 2px #e9d5ff, 0 0 4px #e9d5ff;
          }
          50% {
            text-shadow: 0 0 4px #fdf4ff, 0 0 8px #fdf4ff;
          }
        }
        .animate-soft-lighting {
          animation: soft-lighting 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}