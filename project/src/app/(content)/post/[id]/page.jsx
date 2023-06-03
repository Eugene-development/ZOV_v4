import Article from "./z-module/components/Article"

export default function Page({ params }) {
  return (
    <>
        <Article param = {params.id}/>
    </>
  )
}
