import InfoPost from "./InfoPost"
export default function ({ thumbnail, ...infoPost }) {
  return (
    <article>
      <img src={thumbnail} className="w-full rounded mb-4 mt-5" />
      <InfoPost {...infoPost} />
    </article>
  )
}
