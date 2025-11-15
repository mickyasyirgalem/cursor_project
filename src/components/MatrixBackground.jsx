import { useEffect, useRef, useState } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      return document.documentElement.classList.contains('dark')
    }
    setIsDark(checkTheme())

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(checkTheme())
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      console.error('Canvas ref is null!')
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.error('Could not get 2d context!')
      return
    }
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    setCanvasSize()

    const matrix = "AWRAICT0123456789"
    const matrixArray = matrix.split("")
    const fontSize = 22
    
    // State for animation
    const state = {
      columns: Math.floor(canvas.width / fontSize),
      drops: []
    }
    
    // Initialize drops
    for (let x = 0; x < state.columns; x++) {
      state.drops[x] = Math.random() * -500
    }

    function draw() {
      // Clear with fade
      if (isDark) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)'
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set font
      ctx.font = `bold ${fontSize}px 'Courier New', monospace`
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'

      // Draw falling characters
      for (let i = 0; i < state.drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        const x = i * fontSize
        const y = state.drops[i] * fontSize
        
        // Set color based on theme
        if (isDark) {
          ctx.fillStyle = `rgba(0, 255, 65, ${0.8 + Math.random() * 0.2})`
        } else {
          ctx.fillStyle = `rgba(0, 102, 51, ${0.85 + Math.random() * 0.15})`
        }
        
        ctx.fillText(text, x, y)

        // Reset drop when it goes off screen
        if (state.drops[i] * fontSize > canvas.height + 200) {
          state.drops[i] = Math.random() * -200
        }
        state.drops[i] += 2
      }
    }

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
      const newColumns = Math.floor(canvas.width / fontSize)
      if (newColumns !== state.columns) {
        state.columns = newColumns
        state.drops = []
        for (let x = 0; x < state.columns; x++) {
          state.drops[x] = Math.random() * -500
        }
      }
    }

    // Start animation
    draw() // Draw immediately
    animationRef.current = setInterval(draw, 25)
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: isDark ? 0.08 : 0.1, // Very subtle
      }}
    />
  )
}

