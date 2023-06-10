"use client"
import { motion } from "framer-motion"

export default function Head(props) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }} >
      <div className="bg-white py-8 sm:py-20">
          <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="font-[lato] mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{props.head.h1}</h1>
              <p className="px-2 font-light text-gray-500 text-sm sm:text-lg dark:text-gray-400">{props.head.description}</p>
              {/* <p className="px-2 font-light text-gray-500 text-sm sm:text-xl dark:text-gray-400">Выберите с помощью фильтра подходящую конфигурацию, стиль и цвет кухонного гарнитура</p> */}
          </div> 
      </div> 
    </motion.main>
  )
}
