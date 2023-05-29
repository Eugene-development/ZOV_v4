import {
  FireIcon
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Каркас.',
    description: 'В производстве каркасов мы используем импортный влагостойкий ЛДСП толщиной 18мм.',
    icon: FireIcon,
  },
  {
    name: 'Фасады.',
    description: 'Фасады собственного производства из МДФ, массива или ЛДСП любого размера под ваш вкус.',
    icon: FireIcon,
  },
  {
    name: 'Фурнитура.',
    description: 'Высокопрочная фурнитура обеспечит долгую беспроблемную эксплуатацию вашей мебели.',
    icon: FireIcon,
  },
  {
    name: 'Столешницы.',
    description: 'Предлагаем пластиковые, акриловые и кварцевые столешницы нужного размера и формы.',
    icon: FireIcon,
  },
  {
    name: 'Стекло и зеркала.',
    description: 'Используем зеркала и стекло различной толщины с обработкой торцов для вашей безопасности.',
    icon: FireIcon,
  },
  {
    name: 'Техника.',
    description: 'Комплектуем мебель встраиваемой и стационарной бытовой техникой от надёжных мировых брэндов.',
    icon: FireIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-200">Это важно</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Качество материалов</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Мы гордимся высочайшим качеством материалов, которые мы используем при производстве кухонных гарнитуров и шкафов.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-indigo-200">
                <feature.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
