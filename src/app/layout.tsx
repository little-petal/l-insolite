import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "L'insolite",
  description: "Mobiliers et objets insolites",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='w-screen scroll-auto snap-mandatory snap-y overflow-x-hidden'>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"></link>
        <link rel="" href="https://www.flaticon.com/fr/icones-gratuites"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}