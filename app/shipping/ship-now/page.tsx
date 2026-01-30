'use client'

import { useI18n } from '@/components/i18n-provider'
import { Package, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ShipNowPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-foreground mb-6">Ship Now</h1>
            <p className="text-xl text-muted-foreground">快速创建寄件订单，即刻发货</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-8">
              {/* From */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">寄件地址</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="发件人姓名" />
                  <Input placeholder="联系电话" />
                  <Input placeholder="国家/地区" className="md:col-span-2" />
                  <Input placeholder="详细地址" className="md:col-span-2" />
                </div>
              </div>

              {/* To */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">收件地址</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="收件人姓名" />
                  <Input placeholder="联系电话" />
                  <Input placeholder="国家/地区" className="md:col-span-2" />
                  <Input placeholder="详细地址" className="md:col-span-2" />
                </div>
              </div>

              {/* Package Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">包裹信息</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input placeholder="重量 (kg)" type="number" />
                  <Input placeholder="长度 (cm)" type="number" />
                  <Input placeholder="宽度 (cm)" type="number" />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  获取报价
                </Button>
                <Button size="lg" variant="outline">
                  保存草稿
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
