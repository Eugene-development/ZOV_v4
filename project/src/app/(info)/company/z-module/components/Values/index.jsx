const values = [
  {
    name: 'Открытость',
    description:
      'Наши салоны работают ежедневно и мы всегда рады вам, чтобы дать исчерпывающую консультацию по всем вопросам.',
  },
  {
    name: 'Лояльность',
    description:
      'Мы всегда идём навстречу нашим клиентам в любой ситуации, потому что дорожим вами и надеемся на долгое сотрудничество.',
  },
  {
    name: 'Поддержка',
    description:
      'В сложной ситуации при доставке или в процессе сборки мы стараемся решать возникшие вопросы в кратчайшие сроки.',
  },
  {
    name: 'Качество',
    description:
      'Система контроля качества и надёжная упаковка гарантирует целостность заказа и соответствие заявленному качеству.',
  },
  {
    name: 'Гибкость',
    description:
      'У нас гибкая политика в отношении цены, условий доставки и дат установки заказанной вами мебели для вашего комфорта.',
  },
  {
    name: 'Инновации',
    description:
      'Наша компания смотрит на развивающуюся индустрию мебели и внедряет современные решения в производство мебели.',
  },
]

export default function Values() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наши принципы</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
            Наша компания основывается на принципах индивидуального подхода, высокого качества и соблюдения сроков.
        </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
            <div key={value.name}>
            <dt className="font-semibold text-gray-900">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
        ))}
        </dl>
    </div>
  )
}
