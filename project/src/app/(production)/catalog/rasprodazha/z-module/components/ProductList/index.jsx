import ProductListComponent from "@/app/(production)/z-module/components/ProductList"

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

  return (
    <ProductListComponent products={products}/>
  )
}
