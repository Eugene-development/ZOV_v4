"use client"
import { motion } from "framer-motion"
import { useStore } from "@/app/z-module/store"
const { visibleFormConsultation } = useStore

const products = [
  {
    project: "РШ 8327",
    img: 'https://zovrus.ru/files/_cache/product/chr-8922.resize1200x1200w.jpg?7381128335e22fc636d9ad53a5ea196e'
  },
  {
    project: "РШ 8327",
    img: 'https://zovrus.ru/files/_cache/product/chr-8922.resize1200x1200w.jpg?7381128335e22fc636d9ad53a5ea196e'
  },
  {
    project: "РШ 8327",
    img: 'https://zovrus.ru/files/_cache/product/chr-8922.resize1200x1200w.jpg?7381128335e22fc636d9ad53a5ea196e'
  },
  {
    project: "РШ 8327",
    img: 'https://zovrus.ru/files/_cache/product/chr-8922.resize1200x1200w.jpg?7381128335e22fc636d9ad53a5ea196e'
  },
  {
    project: "РШ 8327",
    img: 'https://zovrus.ru/files/_cache/product/chr-8922.resize1200x1200w.jpg?7381128335e22fc636d9ad53a5ea196e'
  },
  {
    project: "РШ 8327",
    img: 'https://zovrus.ru/files/_cache/product/chr-8922.resize1200x1200w.jpg?7381128335e22fc636d9ad53a5ea196e'
  },
]

export default function ProductList() {
  const { openVisibleFormConsultation } = visibleFormConsultation();

  return (
        <motion.main 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 2, y: -10 }} 
          transition={{ type: "spring", stiffness: 50 }}
        >
          <section className="bg-white dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 py-4 mx-auto sm:py-6 ">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {products.map(item => (
                      <div className="relative overflow-hidden rounded-lg group">
                        <img className="object-cover w-full h-[280px] scale-100 ease-in duration-300 group-hover:scale-125" src={item.img} alt="кухонный гарнитур"/>
                        <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                          <div className="text-center">
                            <p className="text-base font-medium text-gray-300">
                              Проект: {item.project}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="max-w-3xl p-4 mx-auto mt-8 rounded-md lg:mt-16 bg-gray-50 dark:bg-gray-800">
                    <div className="flex flex-col justify-between gap-3 md:gap-6 md:items-center md:flex-row">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base font-normal text-gray-700 dark:text-gray-400">
                          <span className="font-semibold">
                            Получите консультацию на объекте.
                          </span>
                        </span>
                      </div>

                      <button onClick={openVisibleFormConsultation}
                        className="inline-flex items-center text-base font-medium text-red-600 hover:underline dark:text-red-500">
                        Записаться
                        <svg aria-hidden="true" className="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                          fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
          </section>
        </motion.main>
  )
}
