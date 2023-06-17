const stats = [
  { label: 'Выполненных проектов ежегодно', value: '5000+' },
  { label: 'Цветов и оттенков материала', value: '2000+' },
  { label: 'Профессиональных дизайнера в штате', value: '102' },
  { label: 'Салонов в Москве и области', value: '26' },
  { label: 'Поставщиков техники и фурнитуры', value: '12' },
]

export default () => {
  return (
        <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наша миссия</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                  Миссия нашей компании заключается в том, чтобы предоставлять нашим клиентам высококачественную мебель, которая не только удовлетворяет их функциональные потребности, но и приносит им радость и комфорт в их жизни. Мы стремимся создавать кухонные гарнитуры, гардеробы и шкафы купе, которые соответствуют самым высоким стандартам качества и дизайна.
                  </p>
                  <p className="mt-10">
                    Мы уделяем особое внимание каждой детали нашей продукции, от выбора материалов до конечного производства. Тщательно подбираем только самые лучшие материалы, такие как натуральное дерево, металл и стекло, чтобы наша мебель была долговечной и выглядела прекрасно на протяжении многих лет.
                  </p>
                  <p className="mt-10">
                    Кроме того, мы также сосредотачиваемся на создании красивого и функционального дизайна нашей мебели. Мы понимаем, что кухня и гардероб – это не просто функциональные помещения, а также места, где люди проводят много времени. Мы учитываем потребности и предпочтения каждого клиента, чтобы создать мебель, которая идеально подходит их индивидуальному стилю и нуждам.
                  </p>
                  {/* <p className="mt-10">
Мы также гордимся тем, что наша мебель является экологически чистой и безопасной для использования. Мы убеждены, что люди должны иметь возможность жить в здоровой и безопасной среде, и мы делаем все возможное, чтобы наша мебель соответствовала этим стандартам.                  </p>
                  <p className="mt-10">
Мы стремимся быть лучшими в нашей отрасли, предоставляя нашим клиентам самые высококачественные продукты и услуги. Мы понимаем, что наш успех зависит от удовлетворенности наших клиентов, и мы делаем все возможное, чтобы превзойти их ожидания.

                  </p>
                  <p className="mt-10">
Мы стремимся создавать долгосрочные отношения с нашими клиентами, основанные на доверии и взаимопонимании. Мы понимаем, что покупка мебели – это серьезное решение, и мы готовы предоставить нашим клиентам все необходимые сведения и рекомендации, чтобы помочь им сделать правильный выбор.                  </p>
                  <p className="mt-10">
Наша команда профессионалов всегда готова ответить на любые вопросы и предоставить необходимую помощь на каждом этапе процесса – от консультации до доставки и монтажа мебели. Мы стремимся обеспечить нашим клиентам максимальный уровень удовлетворенности, и готовы сделать все возможное, чтобы достичь этой цели.                  </p>
                  <p className="mt-10">
Мы также придерживаемся высоких стандартов социальной ответственности, работая только с поставщиками, которые соблюдают все необходимые требования в области безопасности и экологии. Мы также поддерживаем местные сообщества, участвуя в различных благотворительных и социальных мероприятиях.                  </p>
                  <p className="mt-10"> */}
{/* В целом, наша миссия – это создание высококачественной мебели, которая не только соответствует самым высоким стандартам качества и дизайна, но и приносит нашим клиентам радость и комфорт в их жизни. Мы стремимся быть лучшими в нашей отрасли, предоставляя нашим клиентам надежные и профессиональные услуги, и готовы сделать все возможное, чтобы превзойти их ожидания. Благодаря нашей миссии и ценностям, мы уверены в своем успехе и готовы стать вашим надежным партнером в области мебели.                  </p> */}
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
  )
}
