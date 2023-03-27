export default function AuthorPost({ authorAvatar, authorName, authorJob }) {
  return (
    <div className="flex items-center space-x-4 mt-5">
      <div>
        <img
          src={authorAvatar}
          alt="ll"
          className="lg:w-14 md:w-12 sm:w-10 w-14"
        />
      </div>
      <div>
        <h3 className="xl:text-md sm:text-sm">{authorName}</h3>
        <p className="text-sm text-white/60 mt-1">{authorJob}</p>
      </div>
    </div>
  )
}
