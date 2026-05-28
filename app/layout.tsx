import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vertron Solutions • Enterprise AI Workforces',
  description: 'We build and operate autonomous AI agent fleets for serious businesses. Hermes Gateway orchestration, production n8n automation, and custom multi-agent systems.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Vertron Solutions • Enterprise AI Workforces',
    description: 'Build your own AI workforce. We design and operate autonomous agent systems that run complex business operations with precision.',
    images: [{ url: '/og-image.png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0F] text-white antialiased">
        {children}
      </body>
    </html>
  )
}


