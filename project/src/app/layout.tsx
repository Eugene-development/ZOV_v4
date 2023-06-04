// import './globals.css'
import '../../src/css/globals.css'
import { Inter } from 'next/font/google'

import Banner from "./z-module/layout/Banner";
import Header from "./z-module/layout/Header";
import Footer from "./z-module/layout/Footer";


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Banner/>
        <Header />
          {children}
        <Footer/>
      </body>
    </html>
  )
}
