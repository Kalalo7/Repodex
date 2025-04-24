import './globals.css'
import type { Metadata } from 'next'
import { Inter, Orbitron, Creepster } from 'next/font/google'
import KofiWidget from '@/components/KofiWidget'

// Define fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
})

const creepster = Creepster({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-horror',
})

export const metadata: Metadata = {
  title: 'Repodex - Guía no oficial para R.E.P.O.',
  description: 'Guía completa no oficial para el juego de terror R.E.P.O.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${creepster.variable}`}>
      <body className="font-body bg-dark-100 text-white min-h-screen bg-grid-pattern bg-grid">
        <div className="min-h-screen flex flex-col relative overflow-hidden">
          {/* Ambient background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary opacity-5 blur-3xl"></div>
            <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-secondary opacity-5 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-accent opacity-5 blur-3xl"></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10 flex-grow">
            {children}
          </div>
          
          {/* Footer */}
          <footer className="relative z-10 py-6 px-4 bg-dark-300 border-t border-dark-400">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-2 md:mb-0">
                  REPODEX - Guía no oficial para R.E.P.O.
                </p>
                <p className="text-gray-400">
                  Coded with <span className="text-danger">❤</span> by{" "}
                  <a 
                    href="https://kalalo7.github.io/Portfolio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors"
                  >
                    Kalalo7
                  </a>
                </p>
              </div>
            </div>
          </footer>
          
          {/* Ko-fi Widget */}
          <KofiWidget />
        </div>
      </body>
    </html>
  )
}
