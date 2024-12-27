'use client'

import { useEffect, useState } from 'react'

export default function Page2() {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setMessage(data.message)
      } catch (error) {
        console.error('Error fetching API:', error)
        setMessage('Failed to fetch API.')
      }
    }

    fetchMessage()
  }, [])

  return (
    <div>
      <h1>Next.js 15 API Example</h1>
      <p>API Response: {message}</p>
    </div>
  )
}
