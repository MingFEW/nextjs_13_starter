import { getPostById } from '@/services/posts.api'
import { Suspense } from 'react'

const Content = async () => {
  const data = await getPostById(1)

  return (
    <div className="pt-8">
      <Suspense fallback={<p>LOADING...</p>}>
        <article>
          {data.title && <h2 className="text-2xl capitalize mb-4">{data.title}</h2>}
          {data.body && <div className="blog-ct text-md lg:text-xl">{data.body}</div>}
        </article>
      </Suspense>
    </div>
  )
}

export default Content
