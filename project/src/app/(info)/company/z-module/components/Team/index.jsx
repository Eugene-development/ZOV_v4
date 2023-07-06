const team = [
  {
    name: 'Александр Кайкы',
    email: '204@zovrus.ru',
    imageUrl:
      'https://zovrus.ru/files/_cache/user/chr-3221.resize3000x3000.jpg?853cefe61157af152539d7d8a20d3e96',
  },
  {
    name: '',
    email: '@zovrus.ru',
    imageUrl:
      '',
  },
  {
    name: '',
    email: '@zovrus.ru',
    imageUrl:
      '',
  },
  {
    name: '',
    email: '@zovrus.ru',
    imageUrl:
      '',
  },
  {
    name: '',
    email: '@zovrus.ru',
    imageUrl:
      '',
  },
  {
    name: '',
    email: '@zovrus.ru',
    imageUrl:
      '',
  },
  {
    name: '',
    email: '@zovrus.ru',
    imageUrl:
      '',
  },
  {
    name: '',
    email: '@zovrus.ru',
    imageUrl:
      '',
  },
]

export default () =>{
    return (
        <div className="mx-auto my-32 max-w-7xl px-6 sm:my-64 lg:px-8">
          <div className="mx-auto max-w-5xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Лучшие дизайнеры нашей компании</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Наши дизайнеры - талантливые профессионалы, вдохновленные творчеством, они создают уникальные и функциональные мебельные решения, отражающие индивидуальный стиль и вкус наших клиентов.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="mx-auto h-36 w-24 rounded-md" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{person.email}</p>
              </li>
            ))}
          </ul>
        </div>

    )
}