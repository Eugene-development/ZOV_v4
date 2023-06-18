import Head from "@/app/(production)/z-module/components/Head"
import ProductList from "@/app/(production)/z-module/components/ProductList"

export const metadata = {
  title: 'Фабрика ЗОВ | Распродажа',
  description: 'Распродажа образцов фабрики ЗОВ',
}

const data = {
  head: {
    h1: 'Распродажа мебели',
    description: 'Продаём образцы мебели из салонов по сниженным ценам в связи с обновлением'
  },
  products: [
    {
      project: "РШ 8327",
      img: 'https://zovrus.ru/files/_cache/product/chr-8922.resize1200x1200w.jpg?7381128335e22fc636d9ad53a5ea196e'
    },
  ]
}

export default () => {
  return (
    <>
        <Head head={data.head}/>
        <ProductList products={data.products}/>
    </>
  )
}
