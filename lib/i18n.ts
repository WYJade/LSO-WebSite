export const translations = {
  zh: {
    // 通用
    actions: '操作',
    status: '状态',
    search: '搜索',
    filter: '筛选',
    export: '导出',
    import: '导入',
    create: '创建',
    edit: '编辑',
    delete: '删除',
    save: '保存',
    cancel: '取消',
    confirm: '确认',
    
    // 导航和模块
    dashboard: '仪表板',
    tracking: '货物追踪',
    shipping: '寄件服务',
    quote: '运费查询',
    locations: '网点查询',
    services: '服务介绍',
    support: '客户支持',
    account: '我的账户',
    prices: '价格',
    schedules: '时刻表',
    contact: '联系我们',
    
    // 物流模块
    trackingNumber: '运单号',
    shipmentStatus: '货物状态',
    origin: '起运地',
    destination: '目的地',
    estimatedDelivery: '预计送达',
    actualDelivery: '实际送达',
    
    // 状态
    pending: '待处理',
    inTransit: '运输中',
    delivered: '已送达',
    exception: '异常',
    
    // Hero Section
    heroTitle: '全球物流解决方案',
    heroSubtitle: '可靠、高效、专业的物流服务',
    trackShipment: '追踪货物',
    getQuote: '获取报价',
    bookShipment: '预订服务',
  },
  en: {
    // Common
    actions: 'Actions',
    status: 'Status',
    search: 'Search',
    filter: 'Filter',
    export: 'Export',
    import: 'Import',
    create: 'Create',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    
    // Navigation and Modules
    dashboard: 'Dashboard',
    tracking: 'Tracking',
    shipping: 'Shipping',
    quote: 'Get a Quote',
    locations: 'Locations',
    services: 'Services',
    support: 'Support',
    account: 'My Account',
    prices: 'Prices',
    schedules: 'Schedules',
    contact: 'Contact Us',
    
    // Logistics Module
    trackingNumber: 'Tracking Number',
    shipmentStatus: 'Shipment Status',
    origin: 'Origin',
    destination: 'Destination',
    estimatedDelivery: 'Estimated Delivery',
    actualDelivery: 'Actual Delivery',
    
    // Status
    pending: 'Pending',
    inTransit: 'In Transit',
    delivered: 'Delivered',
    exception: 'Exception',
    
    // Hero Section
    heroTitle: 'Global Logistics Solutions',
    heroSubtitle: 'Reliable, Efficient, Professional Logistics Services',
    trackShipment: 'Track Shipment',
    getQuote: 'Get Quote',
    bookShipment: 'Book Shipment',
  }
}

export type Language = 'zh' | 'en'
export type TranslationKey = keyof typeof translations.zh
