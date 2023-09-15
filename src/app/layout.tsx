import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer, Header } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Page | Next13 Starter',
  description: 'Demo how to start Nextjs quickly'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
