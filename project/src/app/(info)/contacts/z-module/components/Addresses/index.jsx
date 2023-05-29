const showrooms = [
    {
        city: 'Москва',
        address: 'Мичуринский проспект,  10к1',
        metro: 'Ломоносовский проспект',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/chr-0272.resize1000x1000.jpg?2481a87f3961aa53681c2afd4246f0e6',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Профсоюзная улица, 118',
        metro: 'Коньково',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/abc-photo-98216_1280x0.resize1000x1000.jpg?3eb1cb1fb74218b0d40867bd9cbbb6e1',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Варшавское шоссе, 143к5А',
        metro: 'Аннино',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/ili05907-hdr.resize1000x1000.jpg?5ca04afcf4771e6bcbe2a5ffff48f2aa',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Спартаковская улица, 21',
        metro: 'Бауманская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/hdr__mg_7456.resize1000x1000.jpeg?7a2f4a1a06fa420d24da80081f064205',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Полярная улица, 21',
        metro: 'Бабушкинская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/xxxl-1.resize1000x1000.jpeg?ba69f1ad3ef6fa5dd30548b2f3193fe5',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'улица Поляны, 8',
        metro: 'Бульвар Дмитрия Донского',
        workingMode: '10.00-22.00',
        img: 'https://zovrus.ru/files/_cache/salon/maxresdefault.resize1000x1000.jpg?dd5c2a5892574689efcc7b5703c70ae7',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'проспект Мира, 102к1',
        metro: 'Алексеевская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/photo_2021-09-30_13-45-25.resize1000x1000.jpg?e65b8ba6092d23b2c020c2b52bf5fbd4',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Бутырская улица, 65/68',
        metro: 'Бульвар Дмитрия Донского',
        workingMode: '11.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/_mg_7879.resize1000x1000.jpg?6e3e67c77f4b7ce4729655a9f2fb023c',
        link: '/'
    },
]

export default function Addresses() {
  return (
    <aside aria-label="Related articles" className="bg-white dark:bg-gray-900">
        <div className="px-20 py-8 mx-auto max-w-full">
            <div className="grid gap-6 lg:gap-12 md:grid-cols-2 ">
                {showrooms.map(item => (
                     <div key={item.address} className="flex flex-col xl:flex-row transition ease-in-out hover:scale-105 border-r">
                        <div className="">
                            <img src={item.img} className="mr-5 max-w-sm rounded-md" alt="saloon"></img>
                        </div>
                        <div className="flex flex-col mt-2">
                            <p className="mb-2 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                <span>{item.city},</span>
                            </p>
                            <p className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                                <span>{item.address}</span>
                            </p>
                            <p className="my-2 font-light text-gray-500 dark:text-gray-400 max-w-sm">Метро: "{item.metro}"</p>
                            <p className="mb-2 font-light text-gray-500 dark:text-gray-400 max-w-sm">Режим работы: {item.workingMode}</p>
                        </div>
                     </div>
                ))} 
            </div>
        </div>
    </aside>
  )
}
