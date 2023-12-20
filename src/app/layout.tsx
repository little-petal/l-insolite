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
    <html lang="fr" className='scroll-smooth snap-mandatory snap-y overflow-x-hidden'>
      <head>
        <script src="https://kit.fontawesome.com/43f55b62d7.js" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
