import React from "react";

export default function Call() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center font-[lato]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Готовы к покупке мебели?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Запишитесь на бесплатную консультацию он-лайн, у вас дома или в
            нашем салоне и получите ответы от менеджера на все интересующие Вас
            вопросы.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
