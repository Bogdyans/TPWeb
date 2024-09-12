"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

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
                '    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id libero orci. Nullam lacinia enim nec urna vehicula blandit.</p>', 
                '    <button class="btn btn-primary">Learn More</button>', 
                '  </section>', 
                '', 
                '  <section id="about">', 
                '    <h2>About Us</h2>', 
                '    <p>Curabitur imperdiet nulla ut libero dictum, ac dapibus velit suscipit. Integer gravida justo vel justo porttitor gravida.</p>', 
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
                '  <section id="testimonials">', 
                '    <h2>What Our Clients Say</h2>', 
                '    <blockquote>', 
                '      <p>"This company helped us increase our website traffic by 50% in just three months!"</p>', 
                '      <cite>- John Doe, CEO of Example Corp</cite>', 
                '    </blockquote>', 
                '  </section>', 
                '', 
                '  <section id="contact">', 
                '    <h2>Contact Us</h2>', 
                '    <form>', 
                '      <label for="name">Name:</label>', 
                '      <input type="text" id="name" name="name" required>', 
                '      <label for="email">Email:</label>', 
                '      <input type="email" id="email" name="email" required>', 
                '      <label for="message">Message:</label>', 
                '      <textarea id="message" name="message" rows="4" required></textarea>', 
                '      <button type="submit" class="btn btn-secondary">Send Message</button>', 
                '    </form>', 
                '  </section>', 
                '</div>',
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
          }, 30)
      
          return () => clearInterval(intervalId)
        }, [])
      
        return (
          <pre className="z-10 ml-20 mt-20 pl-20 absolute inset-0 overflow-hidden text-gray-500 opacity-20 blur(8px) font-mono text-xl whitespace-pre">
            {code}
          </pre>
        )
}

export default function Component() {
  const [greeting, setGreeting] = useState("Welcome")

  return (
    <div className="relative min-h-screen bg-gray-950 flex flex-row p-8 overflow-hidden">
      <CodeBackground />
      
      <div className="z-10 w-1/2 flex flex-col justify-center space-y-8 pl-16 ml-5">
        <h1 className="text-7xl font-bold text-white mb-6 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100 ">
            {greeting}
          </span>
        </h1>
        <div className="text-white space-y-6 mb-8">
          <p className="max-w-md text-xl animate-soft-lighting">
            Experience the future of web development with our cutting-edge platform. 
            Built for developers, by developers.
          </p>
          <p className="max-w-md text-xl animate-soft-lighting">
            Join our community and take your coding skills to the next level. 
            Start your journey today!
          </p>
        </div>
      </div>
      
      <div className="z-10 w-1/2 flex flex-col justify-center items-center space-y-8 mr-7 pr-5">
        <Button 
          variant="outline"
          className="animate-soft-lighting w-3/5 h-1/6 bg-gray-950 hover:bg-white text-white hover:text-gray-950 border-purple-300 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_10px_#a855f7,inset_0_0_10px_#a855f7] hover:shadow-[0_0_20px_#ffffff,inset_0_0_20px_#ffffff] text-4xl" 
          onClick={() => setGreeting("Welcome! Sign up now")}
        >
          Sign Up
        </Button>
        <div className="animate-soft-lighting animate-bounce text-white text-center w-3/5 text-3xl">or</div>
        <Button 
          variant="outline"
          className="animate-soft-lighting w-3/5 h-1/6 bg-gray-950 hover:bg-white text-white hover:text-gray-950 border-purple-300 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_10px_#9333ea,inset_0_0_10px_#9333ea] hover:shadow-[0_0_20px_#ffffff,inset_0_0_20px_#ffffff] text-4xl"
          onClick={() => setGreeting("Welcome back")}
        >
          Log In
        </Button>
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