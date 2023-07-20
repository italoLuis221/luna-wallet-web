
import '@/app/globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'luna-wallet',
  description: 'Gerencie seus investimentos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <section className='flex justify-center items-center h-full w-full'>
          {children}
        </section>
      </body>
    </html>
  )
}
