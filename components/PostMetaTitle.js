import Link from "next/link"

export default function PostMetaTitle({ category, date, title, center }) {
  return (
    <>
      <div className="flex items-center md:space-x-4 sm:space-x-2 text-white/60 mt-4">
        <div className="uppercase xl:text-lg sm:text-sm">{category}</div>
        <span>&bull;</span>
        <div className="sm:text-sm xl:text-lg">{date}</div>
      </div>
      <Link href="/detailpost">
        <h2
          className={`lg:text-2xl md:text-xl text-2xl w-full sm:leading-6 xl:leading-10 mt-2 ${
            center ? "text-center" : ""
          }`}
        >
          {title}
        </h2>
      </Link>
    </>
  )
}
