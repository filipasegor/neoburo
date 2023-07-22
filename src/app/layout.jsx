import styles from './globals.scss'
import Link from 'next/link'
import Image from 'next/image'

// import Navbar from "../components/mains/Navbar"
// import GlobalLayout from '@/components/mains/GlobalLayout'
import LeftSide from '@/components/mains/layout/leftSide'
import RightSide from '@/components/mains/layout/rightSide'
import Footer from '@/components/mains/layout/footer'


export const metadata = {
  title: 'НЭО-Бюро',
  description: 'Независимая оценка и экспертиза всех видов имущества',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
          <LeftSide />
          <RightSide />
           {children}
          <Footer />
      </body>
    </html>
  )
}