'use client'

import { useI18n } from '@/components/i18n-provider'
import { User, CreditCard, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ShipWithAccountPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-foreground mb-6">Ship with Account</h1>
            <p className="text-xl text-muted-foreground">使用企业账户享受更多优惠和便捷服务</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <User className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">企业账户</h3>
              <p className="text-sm text-muted-foreground mb-4">专属客户经理，一对一服务</p>
              <Button className="w-full">申请开通</Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <CreditCard className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">月结账户</h3>
              <p className="text-sm text-muted-foreground mb-4">月度统一结算，简化财务流程</p>
              <Button className="w-full">了解详情</Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Package className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">批量寄件</h3>
              <p className="text-sm text-muted-foreground mb-4">支持批量导入，提高效率</p>
              <Button className="w-full">立即使用</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
