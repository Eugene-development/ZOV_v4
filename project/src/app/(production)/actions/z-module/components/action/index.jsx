import { GiftIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Сборка в подарок',
    description:
      'Если ваш заказ свыше 70000 рублей, то наша компания оплатит работу сборщиков за свой счёт.',
    icon: GiftIcon,
  },
  {
    name: 'Вместе дешевле',
    description: 'При разовом заказе кухонного гарнитура и шкафа, мы предоставим скидку 5% на оба изделия.',
    icon: GiftIcon,
  },
  {
    name: 'Каперсберг дарит',
    description: 'Если вы приобретёте 5 позиций техники Kuppersberg, та что по меньшей цене будет вам в подарок.',
    icon: GiftIcon,
  },
]

export default function Action() {
  return (
    <div className="overflow-hidden bg-white py-8 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Акции и подарки</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Мы стараемся Вас порадовать не только качественной и красивой мебелью, но и приятными бонусами при покупке!</p>
            </div> 
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <dl className="mt-10 max-w-xl space-y-8  leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-12 pt-1">
                    <dt className="inline text-lg font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-7 w-7 text-indigo-400" aria-hidden="true" />
                      "{feature.name}"
                    </dt>{' '}<br/>
                    <dd className="inline text-base">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://art-holding.su/image/catalog/category/gifts2.jpg"
            alt="Product screenshot"
            className="w-[40rem] max-w-none  sm:w-[50rem]"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
