"use client"

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    // Handle smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href) {
          // Special handling for home section
          if (href === '#home') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            return
          }

          const element = document.querySelector(href)
          if (element) {
            // Calculate header height dynamically
            const header = document.querySelector('header')
            const headerHeight = header ? header.offsetHeight : 80
            const extraOffset = 40 // Additional spacing for clean separation
            
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementTop - headerHeight - extraOffset

            // Ensure we don't scroll above the top of the page
            const finalPosition = Math.max(0, offsetPosition)

            window.scrollTo({
              top: finalPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    // Add event listener to all anchor links
    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])
} 