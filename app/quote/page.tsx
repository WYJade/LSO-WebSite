'use client'

import { useI18n } from '@/components/i18n-provider'

export default function QuotePage() {
  const { t } = useI18n()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t('quote')}</h1>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">运费查询功能开发中...</p>
      </div>
    </div>
  )
}
