"use client"
import { motion } from "framer-motion"

import { useStore } from "../../store"
const { visibleFormConsultation } = useStore


import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Slider from './Slider'

export default function Hero() {
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
    <motion.main initial={{opacity:0}} animate= {{opacity:1}}>
      <div className="bg-white ">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20">
          <div className="mx-auto max-w-full pb-20 pt-10 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-2 lg:px-8 lg:py-16">
            <div className="px-5 lg:px-2 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-xl">
                  {/* <img
                    className="h-48"
                    src="https://zovofficial.com/image/catalog/logo-rus-x2.png"
                    alt="Your Company"
                  /> */}
                  <div className="mt-4 sm:mt-8 lg:mt-16">
                    <a href="#" className="inline-flex space-x-6">
                      <span className="rounded-full bg-gray-500/10 px-3 py-1 text-xs sm:text-sm font-semibold leading-6 text-gray-900 ring-1 ring-inset ring-gray-600/10 ">
                        Фабрика мебели "ЗОВ"
                      </span>
                      <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6ЛЦ text-gray-600">
                        <span>Ваш промокод</span>
                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </a>
                  </div>
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-[lato]">
                    Мебель для жизни
                  </h1>
                  <p className="mt-6 text-sm md:text-lg leading-6 text-gray-600 ">
                    Фабрика "ЗОВ" - это один из крупнейших производителей кухонной и корпусной мебели как в Республике Беларусь, так и далеко за её пределами. {/* Наша крупнейшая в Москве и области дилерская сеть насчитывает 39 салонов, где вы можете ознакомиться с образцами и получить полную консультацию.  */}
                  </p>
                  <div className="mt-8 md:mt-24 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-gray-700 px-2.5 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Заказать проект
                    </a>
                    <button onClick={openVisibleFormConsultation} className="text-xs sm:text-sm font-semibold leading-6 text-red-900">
                      Консультация специалиста <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-3xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[300%] skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="shadow-lg md:rounded-3xl">
                <div className="bg-gray-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                  <div
                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-gray-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                    aria-hidden="true"
                  />
                  <div className="relative px-6 pt-8 sm:pt-8 md:pl-16 md:pr-0">
                    <Slider/>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
    </motion.main>

  )
}
