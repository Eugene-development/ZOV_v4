"use client"
import { motion } from "framer-motion"

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
        metro: 'Дмитровская',
        workingMode: '1.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/_mg_7879.resize1000x1000.jpg?6e3e67c77f4b7ce4729655a9f2fb023c',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'МКАД, 24-Й КИЛОМЕТР, ТЦ ТВОЙ ДОМ',
        metro: 'Домодедовская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/chr-6676.resize1000x1000.jpg?d998c197bfa57fb655b21c3fdf3bad90',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'КАШИРСКОЕ ШОССЕ, 62/2',
        metro: 'Каширская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/hdr__mg_7989.resize1000x1000.jpg?7fffc1bb60047b7f85e4331f85fa1e43',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'НОВОРЯЗАНСКОЕ ШОССЕ, Д.3',
        metro: 'Котельники',
        workingMode: '10.00-20.00',
        img: 'https://zovrus.ru/files/_cache/salon/2cecffe89917e3b87ef2741073b70f1b.resize1000x1000.jpg?585036492f616f8e03b37f7a9c400bdd',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'МОЖАЙСКОЕ ШОССЕ, 25',
        metro: 'Кунцевская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/chr-5922.resize1000x1000.jpg?e43df2242c9a949890c1d4529f481e8a',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'УЛ. ОБРУЧЕВА, 34/63, СТР.1',
        metro: 'Калужская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/1bef1c6bdace78a633d444cfd76396e8.resize1000x1000.jpeg?50e08249b3432a375625e2665cb2b220',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'НОВОУХТОМСКОЕ ШОССЕ, Д. 2А, ТЦ ГОРОД КОСИНО',
        metro: 'Косино',
        workingMode: '10.00-22.00',
        img: 'https://zovrus.ru/files/_cache/salon/chr-5068.resize1000x1000.jpg?346dd7aaeae38e90bc69c09f97716b2d',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'ЛЮБЛИНСКАЯ УЛИЦА, 165',
        metro: 'Марьино',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/mg_8425.resize1000x1000.jpg?b65a57269bf81082f214ef1ea68f54aa',
        link: '/'
    },
]

export default function Addresses() {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 2, y: -10 }} 
      transition={{ type: "spring", stiffness: 50 }}
    >
        <aside aria-label="Related articles" className="bg-white dark:bg-gray-900">
            <div className="px-4 md:px-20 py-8 mx-auto max-w-full">
                <div className="grid gap-6 lg:gap-12 md:grid-cols-2 ">
                    {showrooms.map(item => (
                        <div key={item.address} className="flex flex-col xl:flex-row transition ease-in-out hover:scale-105 border-r">
                                <img src={item.img} className="md:mr-5 max-w-xs rounded-md object-fill h-52 w-96" alt="saloon"></img>
                            <div className="flex flex-col mt-2">
                                <p className="mb-2 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                    <span>г. {item.city},</span>
                                </p>
                                <p className="mb-2 text-sm font-bold leading-tight text-gray-900 dark:text-white uppercase">
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
    </motion.main>
  )
}
