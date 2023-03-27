import InfoPost from "./InfoPost"

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex sm:flex-row flex-col -mx-6 items-center">
        <div className="lg:w-8/12 md:w-7/12 sm:w-6/12 px-6 ">
          <img
            src="/featured-thumbnail.png"
            alt="xcscxs"
            className="rounded w-full"
          />
        </div>
        <div className=":w-4/12 md:w-5/12 sm:w-6/12 px-6">
          <InfoPost
            category="UI Designer"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  )
}
