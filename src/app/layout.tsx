import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Psicólogo Online | Terapia Online',
  description: 'Atendimento psicológico online com abordagem Cognitivo-comportamental para adultos e adolescentes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
} 