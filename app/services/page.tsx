'use client'

import { useI18n } from '@/components/i18n-provider'
import { Package, Truck, Globe, Shield, Clock, TrendingUp } from 'lucide-react'

export default function ServicesPage() {
  const { t } = useI18n()

  const services = [
    {
      icon: Package,
      title: '国际快递',
      description: '快速、安全的国际快递服务，3-7天送达全球主要城市',
      features: ['门到门服务', '实时追踪', '保险保障', '清关协助']
    },
    {
      icon: Truck,
      title: '海运服务',
      description: '经济实惠的海运方案，适合大批量货物运输',
      features: ['整柜/拼箱', '港到港/门到门', '多式联运', '仓储配送']
    },
    {
      icon: Globe,
      title: '空运服务',
      description: '最快的运输方式，适合紧急和高价值货物',
      features: ['当日达/次日达', '温控运输', '危险品运输', '专机包机']
    },
    {
      icon: Shield,
      title: '仓储服务',
      description: '安全的仓储解决方案，全球多个仓储中心',
      features: ['智能仓储', '库存管理', '分拣包装', '退货处理']
    },
    {
      icon: Clock,
      title: '定制物流',
      description: '根据您的需求定制专属物流解决方案',
      features: ['方案设计', '成本优化', '流程管理', '数据分析']
    },
    {
      icon: TrendingUp,
      title: '供应链管理',
      description: '端到端的供应链优化和管理服务',
      features: ['采购管理', '库存优化', '运输协调', '风险管理']
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              {t('services')}
            </h1>
            <p className="text-xl text-muted-foreground">
              提供全方位的物流解决方案，满足您的各种运输需求
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:border-primary">
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
