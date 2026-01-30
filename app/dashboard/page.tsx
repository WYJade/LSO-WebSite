'use client'

import { useI18n } from '@/components/i18n-provider'
import { Package, TrendingUp, Clock, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              {t('dashboard')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              实时监控您的物流运营，掌握每一个货物动态
            </p>
            <div className="flex gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Track Shipment
              </Button>
              <Button size="lg" variant="outline">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-success font-medium">+12.5%</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">运输中货物</div>
            <div className="text-3xl font-bold text-foreground">1,234</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <span className="text-xs text-success font-medium">+8.2%</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">今日送达</div>
            <div className="text-3xl font-bold text-foreground">89</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <span className="text-xs text-warning font-medium">-3.1%</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">待处理订单</div>
            <div className="text-3xl font-bold text-foreground">45</div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-danger/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-danger" />
              </div>
              <span className="text-xs text-danger font-medium">+2</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">异常件</div>
            <div className="text-3xl font-bold text-foreground">3</div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer">
            <h3 className="text-lg font-semibold text-foreground mb-2">Track Shipment</h3>
            <p className="text-sm text-muted-foreground">实时追踪您的货物位置和状态</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer">
            <h3 className="text-lg font-semibold text-foreground mb-2">Book Shipment</h3>
            <p className="text-sm text-muted-foreground">快速预订物流服务</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer">
            <h3 className="text-lg font-semibold text-foreground mb-2">Get Quote</h3>
            <p className="text-sm text-muted-foreground">获取即时运费报价</p>
          </div>
        </div>
      </section>
    </div>
  )
}
