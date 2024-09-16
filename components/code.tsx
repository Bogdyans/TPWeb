import React, { useState, useEffect } from 'react'


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
      <pre className="z-10 ml-20 mt-20 pl-20 absolute inset-0 overflow-hidden text-gray-500 opacity-20 blur-sm font-mono text-3xl whitespace-pre">
        {code}
      </pre>
    )
  }
  
  export default CodeBackground;