import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cv.pinecone.design'),
  title: 'Dan Butuc — Automation & Product Engineer',
  description:
    'CV and portfolio of Dan Butuc, Automation & Product Engineer based in Luxembourg.',
  openGraph: {
    title: 'Dan Butuc — Automation & Product Engineer',
    description: 'Built with Next.js, TypeScript, and Claude Code.',
    url: 'https://cv.pinecone.design',
    type: 'website',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  )
}
