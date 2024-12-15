import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from './../context/theme-context';
import { Spotlight } from '@/components/ui/Spotlight'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdelrahman | Personal Portfolio',
  description: 'Abdelrahman is a Frontend Developer with 1 year of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}
         bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#e2ebf0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1c3146]"></div>
        <div className="bg-[#D0dae0] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem] dark:bg-[#1e130c]"></div>
        <div className="dark:hidden relative">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="teal"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="pink"
          />
        </div>
        <div className="hidden dark:block relative">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="blue"
          />
        </div>
      <ThemeContextProvider>
      <ActiveSectionContextProvider>
      <Header/>  
      {children}
      <Footer/>
      <Toaster position='top-right'/>
      <ThemeSwitch/>
      </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
    </html>
  )
}
