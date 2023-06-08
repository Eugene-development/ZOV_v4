import Head from "./z-module/components/Head"
import Filter from "./z-module/components/Filter/index"
import ProductList from "./z-module/components/ProductList"

export const metadata = {
  title: 'Фабрика ЗОВ | Шкафы купе',
  description: 'Шкафы купе фабрики ЗОВ',
}

export default function Page() {
  return (
    <>
        <Head/>
        {/* <Filter/> */}
        <ProductList/>
    </>
  )
}
