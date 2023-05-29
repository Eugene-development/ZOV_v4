import Image from 'next/image'

export default function Catalog() {
  return (
    <>
    <div className="relative isolate">
      <div className="mx-auto max-w-full">
        <div className=" grid grid-cols-2 gap-0.5 overflow-hidden  lg:grid-cols-6 ">
          <div className="bg-gradient-to-r from-indigo-600 from-10% via-indigo-800 to-indigo-600 to-90% hover:from-slate-950 hover:via-slate-900 hover:to-slate-950 p-3 sm:p-5">
            <Image
              className="max-h-8 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Кухонные гарнитуры</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 from-10% via-indigo-800 to-indigo-600 to-90% hover:from-slate-950 hover:via-slate-900 hover:to-slate-950 p-3 sm:p-5">
            <Image
              className="max-h-8 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/icon3.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Шкафы и гардеробы</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 from-10% via-indigo-800 to-indigo-600 to-90% hover:from-slate-950 hover:via-slate-900 hover:to-slate-950 p-3 sm:p-5">
            <Image
              className="max-h-8 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/meb.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Обеденные группы</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 from-10% via-indigo-800 to-indigo-600 to-90% hover:from-slate-950 hover:via-slate-900 hover:to-slate-950 p-3 sm:p-5">
            <Image
              className="max-h-8 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Мебель для ванной</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 from-10% via-indigo-800 to-indigo-600 to-90% hover:from-slate-950 hover:via-slate-900 hover:to-slate-950 p-3 sm:p-5">
            <Image
              className="max-h-8 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/tex.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Бытовая техника</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 from-10% via-indigo-800 to-indigo-600 to-90% hover:from-slate-950 hover:via-slate-900 hover:to-slate-950 p-3 sm:p-5">
            <Image
              className="max-h-8 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/sale.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Распродажа</p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
