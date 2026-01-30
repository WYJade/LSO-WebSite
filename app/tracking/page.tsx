'use client'

import { useI18n } from '@/components/i18n-provider'
import { Search, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TrackingPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              {t('tracking')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              实时追踪您的货物，随时掌握运输状态
            </p>
            
            {/* Search Box */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="输入运单号进行追踪..."
                    className="pl-10 h-12 text-base"
                  />
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Track
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                支持多个运单号查询，用逗号或空格分隔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Shipments */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Shipments</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">LSO-2024-{1000 + i}</div>
                    <div className="text-sm text-muted-foreground">深圳 → 纽约</div>
                    <div className="text-sm text-muted-foreground mt-2">预计送达: 2024-01-{20 + i}</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                    运输中
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
