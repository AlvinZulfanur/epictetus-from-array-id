import { useState } from "react"
import Head from "next/head"
import FeaturedPost from "@/components/FeaturedPost"
import Footer from "@/components/Footer"
import CardPost from "@/components/CardPost"
import Container from "@/components/Container"
import Layout from "@/components/Layout"
import MockPost from "@/utils/posts"
export default function Home() {
  const [posts, setPosts] = useState(MockPost)
  return (
    <Layout>
      <Container>
        <Head>
          <title>Home &mdash; Epictetus</title>
        </Head>
        <FeaturedPost />
        <div className="flex flex-wrap -mx-2">
          {posts.map(post => (
            <div key={post.id} className="sm:w-4/12 flex-col w-full px-2">
              <CardPost {...post} />
            </div>
          ))}
        </div>
        <Footer />
      </Container>
    </Layout>
  )
}
