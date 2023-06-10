import ProductListComponent from "@/app/(production)/z-module/components/ProductList"

const products = [
  {
    project: "MS 110",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/modus/interer-1/1-1600x1086.jpg'
  },
  {
    project: "MS 120",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/modus/interer-2/1-1600x1086.jpg'
  },
  {
    project: "MS 140",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/modus/interer-3/1-1600x1086.jpg'
  },
  // {
  //   project: "MS 150",
  //   img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/modus/interer-4/1-1600x1335.jpg'
  // },
  {
    project: "SLIM LINE-1",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-1/2-1600x1086.jpg'
  },
  {
    project: "SLIM LINE-2",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-slim-line/int-2/cam-1-1600x1086.jpg'
  },
  {
    project: "NOVA-2",
    img: 'https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2022/aristo-nova/int-2/cam-1-1600x1086.jpg'
  },
]

export default function ProductList() {

  return (
    <ProductListComponent products={products}/>
  )
}
