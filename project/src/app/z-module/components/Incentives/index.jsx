/* This example requires Tailwind CSS v2.0+ */
const perks = [
  {
    name: 'Удобство покупки',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    description:
      'Наши салоны работают ежедневно и они расположены практически во всех районах Москвы для вашего удобства.',
  },
  {
    name: 'Акции и подарки',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description:
      "Мы постоянно предлагаем Вам разнообразные дополнительные бонусы при покупке мебели для экономии вашего бюджета.",
  },
  {
    name: 'Доставка на адрес',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    description:
      "Для вас работает логистическая служба с собственным транспортом. Также предоставляется услуга грузчиков.",
  },
  {
    name: 'Гарантии 2 года',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
    description:
      "На мебель мы предоставляем гарантию 24 месяца со дня доставки. На отдельные позиции гарантия достигает 5 лет.",
  },
  {
    name: 'Экологичность материалов',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
      "Наше производство использует материалы с экологическим сертификатом качества, предоставляемым поставщиками.",
  },
  {
    name: 'Поддержка после продажи',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    description:
      "После завершения работ мы всегда рады видеть вас и готовы помочь в сложных ситуациях.",
  },
]

export default function Incentives() {
  return (
    <div className="bg-gradient-to-b from-gray-50">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl pb-6 sm:px-2 sm:pb-12 lg:px-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-4 px-2 sm:py-8 sm:px-2 lg:px-4">Это важно</h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
         

          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="h-24 w-28" src={perk.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
