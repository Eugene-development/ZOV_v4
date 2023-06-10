import ProductListComponent from "@/UI/ProductList"

const products = [
  {
    project: "ШКАФ 1. BASIC LINE",
    img: 'https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/garderobnyj-sh-kaf-1-basic-line-ru/garderobnyj-sh-kaf-1-basic-line-ru_49206.jpeg'
  },
  {
    project: "ШКАФ 7. SMART LINE",
    img: 'https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/garderobnyj-sh-kaf-liniya-smart-wl-elite-wl-ru/garderobnyj-sh-kaf-liniya-smart-wl-elite-wl-ru_49123.jpeg'
  },
  {
    project: "ШКАФ 3. BASIC LINE",
    img: 'https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/sh-kaf-liniya-basic-ru/sh-kaf-liniya-basic-ru_49110.jpeg'
  },
  {
    project: "ШКАФ 4. BASIC / SMART LINE",
    img: 'https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/garderobnyj-sh-kaf-1-basic-smart-line-ru/garderobnyj-sh-kaf-1-basic-smart-line-ru_49189.jpeg'
  },
  {
    project: "ШКАФ 18. BASIC / SMART LINE",
    img: 'https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/2023/garderob-18/1.jpg'
  },
  {
    project: "ШКАФ 17. BASIC / SMART LINE",
    img: 'https://zovofficial.com/image/catalog/products/garderobnye-shkafy-i-sistemy/2023/garderob-17/cam-2.jpg'
  },

]

export default function ProductList() {

  return (
    <ProductListComponent products={products}/>
  )
}
