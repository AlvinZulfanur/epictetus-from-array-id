import { useState } from "react"
import Layout from "@/components/Layout"
import Container from "@/components/Container"
import CardPost from "@/components/CardPost"
import MockPost from "@/utils/posts"
import SectionHeader from "@/components/SectionHeader"
import Footer from "@/components/Footer"
import Head from "next/head"
export default function Posts() {
  const [posts, setPosts] = useState(MockPost)
  return (
    <Layout>
      <Container>
        <Head>
          <title>Post &mdash; Epictetus</title>
        </Head>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-10">
            <h2 className="text-3xl">No result 😥</h2>
            <p className="text-xl text-white/60">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4">
            {posts.map(post => (
              <div key={post.id} className="sm:w-4/12 flex-col w-full  px-4">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
        <Footer />
      </Container>
    </Layout>
  )
}
