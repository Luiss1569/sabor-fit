import './globals.css'
import type { Metadata } from 'next'
import Header from '@components/Header'

export const metadata: Metadata = {
  title: 'VibeFit',
  description: 'VibeFit - A melhor comida fitness do Brasil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-branco font-Libre Franklin mx-20">
        <Header />
        {children}
        </body>
    </html>
  )
}
