import { Check } from 'lucide-react'
import { Button } from './ui/button'

const plans = [
  {
    name: '基础版',
    price: '免费',
    features: [
      '基本机器人功能',
      '社区支持',
      '每月 1000 条消息',
      '5 个插件限制',
      '基础统计数据'
    ],
    buttonText: '开始使用',
    buttonLink: 'https://v2.nonebot.dev/docs/start/installation'
  },
  {
    name: '专业版',
    originalPrice: '¥499',
    discountedPrice: '¥199',
    features: [
      '高级机器人功能',
      '优先技术支持',
      '每月 100,000 条消息',
      '无限插件使用',
      '自定义插件开发'
    ],
    buttonText: '升级至专业版',
    buttonLink: '/subscribe',
    highlighted: true
  },
  {
    name: '企业版',
    price: '联系我们',
    features: [
      '全部专业版功能',
      '24/7 专属支持',
      '无限消息量',
      '高级 API 访问',
      '定制化解决方案'
    ],
    buttonText: '联系销售',
    buttonLink: '/contact'
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">订阅计划</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white border rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between ${plan.highlighted ? 'border-purple-500 border-2' : ''}`}>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
                {plan.originalPrice ? (
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold">
                      <span className="line-through text-gray-400 mr-2">{plan.originalPrice}</span>
                      {plan.discountedPrice}
                    </p>
                    <p className="text-sm text-purple-600 mt-2">加客服微信领取专属优惠</p>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-center mb-6">{plan.price}</p>
                )}
                <ul className="mb-8 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant={plan.highlighted ? "default" : "outline"} className="w-full" asChild>
                <a href={plan.buttonLink}>{plan.buttonText}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

