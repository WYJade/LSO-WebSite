import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n-provider"
import { MainLayout } from "@/components/layout/main-layout"

export const metadata: Metadata = {
  title: "LSO 物流服务平台",
  description: "专业的物流承运服务平台",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="lso-theme">
          <I18nProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
