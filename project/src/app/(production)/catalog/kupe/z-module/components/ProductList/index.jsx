import ProductListComponent from "@/UI/ProductList"

const products = [
  {
    project: "РШ 83278",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg'
  },
  {
    project: "РШ 8327",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg'
  },
  {
    project: "РШ 8327",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg'
  },
  {
    project: "РШ 8327",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg'
  },
  {
    project: "РШ 8327",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg'
  },
  {
    project: "РШ 8327",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg'
  },
]

export default function ProductList() {

  return (
    <ProductListComponent products={products}/>
  )
}
