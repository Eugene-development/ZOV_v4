
export default function Map() {
  

  return (
    <>
        <div className="mt-16 p-2 bg-gray-50 mx-16 overflow-hidden sm:rounded-lg shadow-xl">
          <div className="px-4 py-4 sm:p-6 ">
              <iframe
                  tabindex="-1"
                  src="https://yandex.ru/maps/-/CCU0uNWFOC"
                  width="1024"
                  height="600"
                  title="map"
                  frameborder="0"
                  class="mx-auto w-full"
              />
          </div>
         </div>

    </>
  )
}
