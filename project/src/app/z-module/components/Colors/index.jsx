
export default () => {
  return (
    // <section className="bg-white dark:bg-gray-900">
    //     <div className="pt-8 mx-auto max-w-full px-8 sm:px-16 lg:px-24 sm:text-center lg:pt-32 text-center">
    //         <h2 className="font-[lato] mb-4 text-3xl md:text-4xl  font-extrabold text-gray-900 dark:text-white">Разнообразие <br className="md:hidden" /> цветов и оттенков</h2>
    //         <p className="font-light text-gray-500 text-sm sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">Вы обязательно найдёте подходящий цвет под ваш интерьер из более чем 2000 вариантов. От нежных пастельных тонов до ярких цветовых решений в матовом или глянцевом исполнении. </p>
    //         <div className="gap-6 mt-8 sm:grid sm:grid-cols-4 sm:mt-20">
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-3018.resize800x800w.jpg?e74c691be26de5528a034a590850de05" alt="content gallery 1"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/dsc08929.resize1200x1200w.jpg?a273c3827b30640f85991bf1f23dc707" alt="content gallery 2"/>
    //             <img className="hidden col-span-1 sm:block rounded-lg" src="https://zovrus.ru/files/_cache/product/dsc08417.resize1200x1200w.jpg?ec23029eadf7df31e3e86bf91a6a148c" alt="content gallery 3"/>
    //             <img className="hidden col-span-1 sm:block rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-0670_2.resize800x800w.jpg?e203baad1ef1f66dffc7d65195163458" alt="content gallery 4"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-3780.resize1200x1200w.jpg?8edcdce1cd9a796b5c426d3c25905ccf" alt="content gallery 5"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-5650.resize1200x1200w.jpg?99512fcbd6b465ce180887a22497881a" alt="content gallery 6"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-2152.resize1200x1200w.jpg?f3b82632ecac9231dab2f9442233cec9" alt="content gallery 6"/>
    //             <img className="col-span-1 mb-4 sm:mb-0 rounded-lg" src="https://zovrus.ru/files/_cache/product/chr-8945.resize800x800w.jpg?d1734f6452cf2d662162fce1a1ea377f" alt="content gallery 6"/>
    //         </div>
    //     </div>
    // </section>

    <section className="bg-white dark:bg-gray-900">
        <div className=" mx-auto max-w-full px-8 sm:px-16 lg:px-24 sm:text-center lg:pt-24 text-center">
            <h2 className="font-[lato] mb-4 text-3xl md:text-4xl  font-extrabold text-gray-900 dark:text-white">Разнообразие <br className="md:hidden" /> цветов и оттенков</h2>
            <p className="font-light text-gray-500 text-sm sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">Вы обязательно найдёте подходящий цвет под ваш интерьер из более чем 2000 вариантов. От нежных пастельных тонов до ярких цветовых решений в матовом или глянцевом исполнении. </p>
            <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-16">
              {/* <img src="https://zovrus.ru/files/_cache/product/chr-8945.resize800x800w.jpg?d1734f6452cf2d662162fce1a1ea377f" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" /> */}
              {/* <div className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}

              <div className="pointer-events-none relative flex gap-6 overflow-hidden">
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-6">
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-3018.resize800x800w.jpg?e74c691be26de5528a034a590850de05" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/dsc08929.resize1200x1200w.jpg?a273c3827b30640f85991bf1f23dc707" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/dsc08417.resize1200x1200w.jpg?ec23029eadf7df31e3e86bf91a6a148c" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-0670_2.resize800x800w.jpg?e203baad1ef1f66dffc7d65195163458" alt="" />
                </div>
                <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-6">
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-3780.resize1200x1200w.jpg?8edcdce1cd9a796b5c426d3c25905ccf" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-5650.resize1200x1200w.jpg?99512fcbd6b465ce180887a22497881a" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-2152.resize1200x1200w.jpg?f3b82632ecac9231dab2f9442233cec9" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-8945.resize800x800w.jpg?d1734f6452cf2d662162fce1a1ea377f" alt="" />
                </div>
              </div>

              <div className="pointer-events-none relative mt-10 flex gap-6 overflow-hidden">
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-6 [animation-direction:reverse]">
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-3018.resize800x800w.jpg?e74c691be26de5528a034a590850de05" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/dsc08929.resize1200x1200w.jpg?a273c3827b30640f85991bf1f23dc707" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/dsc08417.resize1200x1200w.jpg?ec23029eadf7df31e3e86bf91a6a148c" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-0670_2.resize800x800w.jpg?e203baad1ef1f66dffc7d65195163458" alt="" />
                </div>
                <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-6 [animation-direction:reverse]">
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-3780.resize1200x1200w.jpg?8edcdce1cd9a796b5c426d3c25905ccf" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-5650.resize1200x1200w.jpg?99512fcbd6b465ce180887a22497881a" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-2152.resize1200x1200w.jpg?f3b82632ecac9231dab2f9442233cec9" alt="" />
                  <img className="aspect-square max-w-[clamp(20rem,28vmin,20rem)] rounded-md object-cover shadow-md" src="https://zovrus.ru/files/_cache/product/chr-8945.resize800x800w.jpg?d1734f6452cf2d662162fce1a1ea377f" alt="" />
                </div>
              </div>
            </div>
        </div>
    </section>




  )
}
