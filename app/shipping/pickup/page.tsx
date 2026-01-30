'use client'

import { useI18n } from '@/components/i18n-provider'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SchedulePickupPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-foreground mb-6">Schedule Pickup</h1>
            <p className="text-xl text-muted-foreground">预约上门取件，省时省力</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">取件地址</h3>
                </div>
                <Input placeholder="输入取件地址" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">取件日期</h3>
                </div>
                <Input type="date" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">取件时间</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input type="time" placeholder="开始时间" />
                  <Input type="time" placeholder="结束时间" />
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                确认预约
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
