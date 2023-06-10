"use client"
import { motion } from "framer-motion"

export default function Head() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }} >
      <div className="bg-white py-8 sm:py-20">
          <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Шкафы купе</h2>
              <p className="px-2 font-light text-gray-500 text-sm sm:text-xl dark:text-gray-400">Подберите встроенный или корпусный шкаф купе из предложенных вариантов</p>
              {/* <p className="px-2 font-light text-gray-500 text-sm sm:text-xl dark:text-gray-400">Выберите с помощью фильтра подходящую конфигурацию, стиль и цвет кухонного гарнитура</p> */}
          </div> 
      </div> 
    </motion.main>
  )
}