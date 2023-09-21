
import type { Metadata } from 'next'
import Navbar from '../components/Navbar';
import './globals.css'
import {Dongle} from 'next/font/google'
import Footer from '../components/Footer';
import MainNav from '@/components/MainNav';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


// 폰트
const dongle = Dongle({
  weight : '300',
  subsets : ['latin'],
  display : "swap",
  
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
        <MainNav/>
        <Navbar/>
        
        {children}
        <Footer/>
        </body>
        
    </html>
  )
}
