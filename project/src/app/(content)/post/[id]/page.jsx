import Article from "./z-module/components/Article"

export default function Post({ params }) {
  return (
    <>
        <Article param = {params.id}/>
    </>
  )
}
