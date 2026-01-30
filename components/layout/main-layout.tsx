'use client'

import { Header } from './header'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28">
        {children}
      </main>
    </div>
  )
}
