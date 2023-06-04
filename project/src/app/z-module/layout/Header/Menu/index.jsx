"use client"
import Link from "next/link"

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronRightIcon, ChevronDownIcon, PhoneIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const products = [
  {
    name: 'Кухонные гарнитуры',
    description: 'Функциональное решение организации вашей кухни',
    href: '/catalog/kuhna',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Шкафы и гардеробы',
    description: 'Вместительные конструкции с различным наполнением',
    href: '/catalog/garderob',
    icon: CursorArrowRaysIcon,
  },
  { 
    name: 'Шкафы купе', 
    description: 'Дизайнерские решения для экономии пространства', 
    href: '/catalog/kupe', 
    icon: CursorArrowRaysIcon
  },
  {
    name: 'Распродажа мебели',
    description: 'Реализация продукции по сниженным ценам',
    href: '/catalog/rasprodazha',
    icon: CursorArrowRaysIcon,
  },
]
const callsToAction = [
  { name: 'Бытовая техника', href: '#', icon: RectangleGroupIcon },
  { name: 'Мебельная фурнитура', href: '#', icon: RectangleGroupIcon },
  { name: 'Мойки и аксессуары', href: '#', icon: RectangleGroupIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0  isolate z-10 bg-gray-50 shadow-lg">
      <nav className="mx-auto flex max-w-full items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 pl-3">
            <span className="sr-only">Фабрика "ЗОВ"</span>
            <img className="h-12 w-auto" src="https://zovofficial.com/image/catalog/logo-rus-x2.png" alt="логотип" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex divide-x">
          <Link href="/" className="px-4 text-sm xl:text-base  leading-6 text-gray-800 hover:text-red-800 transition ease-in-out hover:scale-110">
            Главная
          </Link>
          <Link href="/company" className="px-4 text-sm xl:text-base  leading-6 text-gray-800 hover:text-red-800 transition ease-in-out hover:scale-110">
            Компания
          </Link>
          <Link href="/blog" className="px-4 text-sm xl:text-base  leading-6 text-gray-800 hover:text-red-800 transition ease-in-out hover:scale-110">
            Блог
          </Link>

          <Popover>     
            <Popover.Button className="outline-none pl-4 pr-3 flex items-center gap-x-1 text-sm xl:text-base font-semibold leading-6 text-gray-950 hover:text-red-800 transition ease-in-out hover:scale-110">
              Каталог
              <ChevronRightIcon className="h-5 w-5 flex-none text-red-700 animate-pulse" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 -z-10 bg-gray-50 pt-14 shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8 ">
                  {products.map((item) => (
                    <div key={item.name} className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50 border-l">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-red-700" aria-hidden="true" />
                      </div>
                      <Link href={item.href} className="mt-6 block text-base font-semibold text-gray-800">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-50 hover:bg-gray-800"
                        >
                          <item.icon className="h-5 w-5 flex-none text-gray-50" aria-hidden="true" />
                          {item.name}
                        </div>
                        // <Link
                        //   key={item.name}
                        //   href={item.href}
                        //   className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-50 hover:bg-gray-800"
                        // >
                        //   <item.icon className="h-5 w-5 flex-none text-gray-50" aria-hidden="true" />
                        //   {item.name}
                        // </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </Popover>

          <Link href="/service" className="px-4 text-sm xl:text-base leading-6 text-gray-800 hover:text-red-800 transition ease-in-out hover:scale-110">
            Сервис
          </Link>
          <Link href="/actions" className="px-4 text-sm xl:text-base leading-6 text-gray-800 hover:text-red-800 transition ease-in-out hover:scale-110">
            Акции
          </Link>
          <Link href="/contacts" className="pl-4 text-sm xl:text-base leading-6 text-gray-800 hover:text-red-800 transition ease-in-out hover:scale-110">
            Салоны
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <div className="bg-white flex rounded-lg px-2 xl:px-6 py-1 text-xl font-semibold leading-6  shadow-lg shadow-gray-300/10 bg-gradient-to-r from-gray-50/50 via-gray-50/50 to-gray-100/50 ring-offset-2 ring-1 ring-gray-200">
                <PhoneIcon className="block h-4 w-4 xl:h-6 xl:w-6 text-gray-950 animate-pulse" aria-hidden="true" />
                <Link href="tel:79154000020" className=" ml-2 text-sm xl:text-lg font-bold text-gray-950"
                    >8 (915) 400-00-20
                </Link>
            </div>
          </div>
        </div>
      </nav>


      {/* MobileMenu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Логотип</span>
              <img
                className="h-8 w-auto"
                src="https://zov.ru/img/logo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 hover:text-red-800" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-bold leading-7 hover:bg-gray-50 hover:text-red-800">
                        Каталог
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>


                <Link
                  href="/company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Компания
                </Link>
                                <Link
                  href="/contacts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Салоны
                </Link>
                <Link
                  href="/service"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Сервис
                </Link>
                <Link
                  href="/actions"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Акции
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-red-800"
                >
                  Блог
                </Link>
              </div>
              <div className="py-6">
                <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                    <div
                        className="flex rounded-lg px-3 py-1.5 text-xl mx-auto font-semibold leading-6 text-gray-800 shadow-xl ring-2 ring-gray-200/100 hover:ring-gray-500/20 "
                    >
                      <div className="flex mx-auto">   
                        <Link href="tel:79154000020" className="flex ml-2 text-lg font-bold "
                            > <PhoneIcon className="block mr-3 h-6 w-6 hover:text-red-800" aria-hidden="true" /> 8 (915) 400-00-20
                        </Link>
                      </div>
                    </div>
                </div> 
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
