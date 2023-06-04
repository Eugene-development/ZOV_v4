import Article from "./z-module/components/Article"

export const metadata = {
  title: 'Фабрика ЗОВ | Пост',
  description: 'Пост на мебельную тему',
}

export default function Page({ params }) {
  return (
    <>
        <Article param = {params.id}/>
    </>
  )
}
