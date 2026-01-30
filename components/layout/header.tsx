'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe, Search, Bell, User, Menu, ChevronDown } from 'lucide-react'
import { useI18n } from '@/components/i18n-provider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function Header() {
  const { language, setLanguage, t } = useI18n()
  const pathname = usePathname()
  const [shippingMenuOpen, setShippingMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  const shippingSubMenu = [
    { label: 'Ship now', href: '/shipping/ship-now', description: '立即寄件' },
    { label: 'Ship with account', href: '/shipping/account', description: '账户寄件' },
    { label: 'Schedule pickup', href: '/shipping/pickup', description: '预约取件' },
    { label: 'Calculate rates/quote', href: '/shipping/quote', description: '运费计算' },
    { label: 'Delivery Options', href: '/shipping/delivery', description: '配送选项' },
    { label: 'Customer Cookie Program', href: '/shipping/cookie', description: '客户优惠计划' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-border">
      {/* Top Bar */}
      <div className="h-12 border-b border-border">
        <div className="container mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'zh' ? 'CN' : 'EN'}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('support')}
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="h-16">
        <div className="container mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">LSO</span>
              <span className="text-xs text-muted-foreground">Logistics Solutions</span>
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              href="/" 
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                isActive('/') && pathname === '/'
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent"
              )}
            >
              首页
            </Link>
            <Link 
              href="/services" 
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                isActive('/services')
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent"
              )}
            >
              服务
            </Link>
            <Link 
              href="/tracking" 
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                isActive('/tracking')
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent"
              )}
            >
              {t('tracking')}
            </Link>
            
            {/* Shipping Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShippingMenuOpen(true)}
              onMouseLeave={() => setShippingMenuOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                  isActive('/shipping')
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                )}
              >
                {t('shipping')}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  shippingMenuOpen && "rotate-180"
                )} />
              </button>
              
              {/* Dropdown Menu */}
              {shippingMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl py-2">
                  {shippingSubMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-accent transition-colors"
                    >
                      <div className="font-medium text-sm text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/quote" 
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                isActive('/quote')
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent"
              )}
            >
              {t('quote')}
            </Link>
            <Link 
              href="/locations" 
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                isActive('/locations')
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent"
              )}
            >
              {t('locations')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Register
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Login
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
