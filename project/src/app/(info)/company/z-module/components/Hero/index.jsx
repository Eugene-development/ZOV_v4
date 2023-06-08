"use client"
import { motion } from "framer-motion"

export default function Hero (){
    return(
      <motion.main initial={{opacity:0}} animate= {{opacity:1}}>
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:pt-24 lg:px-8 lg:pt-12">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-2xl lg:shrink-0 xl:max-w-3xl">
                  <h1 className="font-[lato] text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
                    Мебель <br/>для вашей семьи
                  </h1>
                  {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Мы официальный дилер фабрики "ЗОВ" <br/>в России
                  </h1> */}
                  <p className="relative mt-8 text-base sm:text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Наша компания располагает самой крупной сетью мебельных салонов фабрики "ЗОВ" в России. Предлагаем Вам отличный сервис, доступные цены на мебель премиального класса, а также дружелюбное отношение нашего персонала &#128578;
                  </p>
                  <p className="relative mt-6 text-base sm:text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Ждём Вас в наших салонах!
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://avatars.dzeninfra.ru/get-zen_doc/9707955/pub_646a10017bd61e597f2efc50_646a100729bffd1d35f84376/scale_1200"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://i.pinimg.com/originals/2b/eb/21/2beb21eaddb9af05ba72db42c56266e9.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://avatars.mds.yandex.net/i?id=ab4209ff5dfacfafc95a9b51a43034e3f0035771-8169112-images-thumbs&n=13"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                     <div className="relative">
                      <img
                        src="https://avatars.mds.yandex.net/i?id=f2fc566918295d53bf8e32a83bb6349ebaf231ba-8253234-images-thumbs&n=13"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>

                    <div className="relative">
                      <img
                        src="https://avatars.mds.yandex.net/i?id=1e40ae8822f8039323a4e8711eafc00c-4818427-images-thumbs&n=13"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="hidden md:block relative">
                      <img
                        src="https://avatars.mds.yandex.net/i?id=90ee170d38948c7d40205eaf68d5f03a52468fb7-8270623-images-thumbs&n=13"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.main>

    )
}