import ProductListComponent from "@/UI/ProductList"

const products = [
  {
    project: "РШ 8327",
    img: 'https://zovrus.ru/files/_cache/product/chr-0670_2.resize1200x1200w.jpg?5c92da30a4854ee4a81e8a9dcb3c75ed'
  },
  {
    project: "ОСК 1430",
    img: 'https://zovrus.ru/files/_cache/product/chr-0039_2.resize1200x1200w.jpg?33aaab5064285cbc42245ed8f7a2c20d'
  },
  // {
  //   project: "МШ 2474",
  //   img: 'https://zovrus.ru/files/_cache/product/chr-1587.resize1200x1200w.jpg?0482d8eba3f49309f324bdf695b93932'
  // },
  {
    project: "ТШ 3394",
    img: 'https://zovrus.ru/files/_cache/product/chr-0614.resize1200x1200w.jpg?b00cc4c680739004ce873abc05677f47'
  },
  {
    project: "ОСК 1025",
    img: 'https://zovrus.ru/files/_cache/product/chr-0572_1.resize1200x1200w.jpg?fdaad047c90f0263ee6e7f71ebd294f0'
  },
  {
    project: "ВП 1108",
    img: 'https://zovrus.ru/files/_cache/product/chr-6214.resize1200x1200w.jpg?be70d0fcfbabbfcc59f3a1c2ff02ac6a'
  },
  {
    project: "БР 234",
    img: 'https://zovrus.ru/files/_cache/product/chr-6318.resize1200x1200w.jpg?073efb99aacc87fa949aaf1fbeec5b91'
  },
  {
    project: "НК 91",
    img: 'https://zovrus.ru/files/_cache/product/chr-5441.resize1200x1200w.jpeg?e94056466848f34e74985e95a3ad0778'
  },
  {
    project: "ФМ 508",
    img: 'https://zovrus.ru/files/_cache/product/chr-6141_1.resize1200x1200w.jpg?aa00328a7800cf633311da54df405054'
  },
  {
    project: "БОКС 295",
    img: 'https://zovrus.ru/files/_cache/product/chr-0623_1.resize1200x1200w.jpg?dff06047258116e7d693ea38c32be95a'
  },
]

export default function ProductList() {

  return (
    <ProductListComponent products={products}/>
  )
}
