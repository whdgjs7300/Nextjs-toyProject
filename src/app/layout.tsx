import type { Metadata } from 'next'
import Navbar from './components/Navbar';
import './globals.css'
import {Dongle} from 'next/font/google'

// 폰트
const dongle = Dongle({
  weight : '400',
  subsets : ['latin'],
  style : ['normal'], 
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by JongHeon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html  className={dongle.className}>
      <body >
        <Navbar/>
        
        {children}
        </body>
    </html>
  )
}
