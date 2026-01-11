import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ColaTech Solutions | Digital Infrastructure for Houston Businesses',
    template: '%s | ColaTech Solutions',
  },
  description:
    'Professional websites, network upgrades, security systems, and managed IT services for homes and small businesses in Houston.',
  keywords: [
    'Houston IT services',
    'network installation',
    'business websites',
    'IP cameras',
    'managed IT',
  ],
  authors: [{ name: 'ColaTech Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colatechsolutions.com',
    siteName: 'ColaTech Solutions',
    title: 'ColaTech Solutions | Digital Infrastructure for Houston Businesses',
    description:
      'Professional websites, network upgrades, security systems, and managed IT services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
