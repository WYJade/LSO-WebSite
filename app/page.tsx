'use client'

import { useI18n } from '@/components/i18n-provider'
import { Package, TrendingUp, Globe, Shield, Clock, Truck, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Home() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                <Globe className="h-4 w-4" />
                全球物流解决方案
              </div>
              <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
                可靠、高效的
                <br />
                <span className="text-primary">国际物流服务</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                LSO为您提供端到端的供应链解决方案，覆盖全球200+国家和地区，让您的货物安全、准时送达目的地
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8 text-base">
                  立即追踪货物
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  获取运费报价
                </Button>
              </div>
              
              {/* Quick Track */}
              <div className="mt-12 p-6 bg-card border border-border rounded-lg">
                <div className="text-sm font-medium text-foreground mb-3">快速追踪</div>
                <div className="flex gap-3">
                  <Input 
                    placeholder="输入运单号..."
                    className="h-10"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    追踪
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Truck className="h-48 w-48 text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">服务国家</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">日均货量</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">准时送达率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">客户支持</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">我们的服务</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              提供全方位的物流解决方案，满足您的各种运输需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:border-primary group">
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">国际快递</h3>
              <p className="text-muted-foreground mb-4">
                快速、安全的国际快递服务，3-7天送达全球主要城市
              </p>
              <Link href="/services/express" className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all">
                了解更多 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:border-primary group">
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">海运服务</h3>
              <p className="text-muted-foreground mb-4">
                经济实惠的海运方案，适合大批量货物运输
              </p>
              <Link href="/services/ocean" className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all">
                了解更多 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:border-primary group">
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">空运服务</h3>
              <p className="text-muted-foreground mb-4">
                最快的运输方式，适合紧急和高价值货物
              </p>
              <Link href="/services/air" className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all">
                了解更多 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:border-primary group">
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">仓储服务</h3>
              <p className="text-muted-foreground mb-4">
                安全的仓储解决方案，全球多个仓储中心
              </p>
              <Link href="/services/warehouse" className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all">
                了解更多 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:border-primary group">
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">定制物流</h3>
              <p className="text-muted-foreground mb-4">
                根据您的需求定制专属物流解决方案
              </p>
              <Link href="/services/custom" className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all">
                了解更多 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:border-primary group">
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">供应链管理</h3>
              <p className="text-muted-foreground mb-4">
                端到端的供应链优化和管理服务
              </p>
              <Link href="/services/supply-chain" className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all">
                了解更多 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">为什么选择LSO</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              我们致力于为客户提供最优质的物流服务体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">全球网络覆盖</h3>
                <p className="text-muted-foreground">覆盖200+国家和地区，500+服务网点</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">实时追踪</h3>
                <p className="text-muted-foreground">24/7实时追踪货物状态，随时掌握物流信息</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">专业团队</h3>
                <p className="text-muted-foreground">经验丰富的物流专家团队，提供专业咨询</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">安全保障</h3>
                <p className="text-muted-foreground">全程保险保障，让您的货物运输无忧</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">准备开始了吗？</h2>
            <p className="text-xl mb-8 opacity-90">
              立即体验LSO的专业物流服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base">
                获取报价
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/10 border-white/20 text-white hover:bg-white/20">
                联系我们
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
