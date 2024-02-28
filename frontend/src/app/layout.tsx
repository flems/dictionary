import '@/styles/main.scss'
import { Layout } from '@/views/Layout/Layout'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  fallback: ['sans-serif']
})

export const metadata: Metadata = {
  title: 'Dictionary',
  description: 'Usefull dictionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
