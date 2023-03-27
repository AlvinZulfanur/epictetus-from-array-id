import AuthorPost from "./AuthorPost"
import PostMetaTitle from "./PostMetaTitle"

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="w-9/12 lg:text-lg  md:text-sm sm:text-xs  text-white/60 lg:leading-loose mt-2">
        {shortDescription}
      </p>
      <AuthorPost
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  )
}
