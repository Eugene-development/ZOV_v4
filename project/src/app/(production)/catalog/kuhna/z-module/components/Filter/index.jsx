
export default function Filter() {
  return (
    <>
    {/* <div class="max-w-3xl my-8 mx-auto text-center">
      <h1 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Кухонные гарнитуры
      </h1>
      <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        You'll interact with talented professionals, will be challenged to solve difficult problems and think in new and
        creative ways.
      </p>
    </div> */}

        <section className="flex items-center py-10 bg-gray-50 dark:bg-gray-900">
            
          <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
              <div className="relative px-4 overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
              <div
                  className="flex flex-col pt-4 space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
                  <div>
                    <nav
                        className="flex px-3 py-2 mb-10 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                        aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="/"
                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-white">
                            Главная
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <a href="/#"
                                className="ml-1 text-sm font-medium text-gray-700 hover:text-red-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">
                                Каталог
                            </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                            Кухонные гарнитуры
                            </span>
                            </div>
                        </li>
                        </ol>
                    </nav>
                    {/* <h4>
                        <span className="dark:text-white">Выберите подходящий фильтр:</span>
                    </h4> */}
                  </div>
                  {/* <div
                  className="flex flex-col items-start flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                      <button type="button"
                              className="flex items-center justify-center px-4 py-2 mb-16 text-sm font-medium text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                          Применить
                      </button>
                  </div> */}
              </div>
              <div className="grid w-full grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-6">
                  <select
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                    <option selected>Все стили</option>
                    <option value="samsung">Современный</option>
                    <option value="apple">Классика</option>
                    <option value="nokia">Лофт</option>
                    <option value="sony">Sony</option>
                  </select>
                  <select
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                  <option selected>Все цвета</option>
                    <option value="tablet">Синий</option>
                    <option value="phone">Красный</option>
                    <option value="tv">Зелёный</option>
                    <option value="console">Console</option>
                  </select>
                  <select
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                  <option selected>Все материалы</option>
                  <option value="black">ПВХ</option>
                  <option value="white">Эмаль</option>
                  <option value="silver">Акрил</option>
                  <option value="silver">Массив</option>
                  </select>
              </div>
              <div className="items-center justify-between block w-full py-3 border-t dark:border-gray-700 md:flex">
                  <div className="flex flex-wrap mb-4 md:mb-0">
                  <div className="flex items-center w-full mb-2 mr-4 text-sm font-medium text-gray-900 dark:text-white md:w-auto md:mb-0">
                      Расположение:
                  </div>
                  <div className="flex items-center mr-4">
                      <input id="all-products" type="radio" value="" name="show-only" checked
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-red-600 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label for="all-products" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Любое
                      </label>
                  </div>
                  <div className="flex items-center mr-4">
                      <input id="sort-category" type="radio" value="" name="show-only"
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-red-600 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label for="sort-category" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Прямая
                      </label>
                  </div>
                  <div className="flex items-center mr-4">
                      <input id="sort-price" type="radio" value="" name="show-only"
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-red-600 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label for="sort-price" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      "Г"-Образная
                      </label>
                  </div>
                  <div className="flex items-center mr-4">
                      <input id="sort-state" type="radio" value="" name="show-only"
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-red-600 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label for="sort-state" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      "П"-Образная
                      </label>
                  </div>
                  </div>

                  <div>
                  <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown"
                          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          type="button">
                      Сбросить фильтр
                  </button>
                  <div id="actionsDropdown"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="actionsDropdownButton">
                      <li>
                          <a href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Mass Edit
                          </a>
                      </li>
                      </ul>
                      <div className="py-1">
                      <a href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                          Delete all
                      </a>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
          </div>
      </section>
    </>
  )
}
