import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { Header } from '../components/Header/header'
import './globals.css'
import { DefaulProvider } from '@/components/default-providers'

const saira =Saira({ subsets: ['latin'], 
weight: ['300', '400','500','600']})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'A maior loja da internet!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaulProvider>
          <Header/>
          {children}
        </DefaulProvider>
      </body>
    </html>
  )
}
