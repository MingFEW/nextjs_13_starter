import { Suspense } from 'react'

import { getPostById } from '@/services/posts.api'

const Content = async () => {
  const data = await getPostById(1)

  return (
    <div className="pt-8">
      <Suspense fallback={<p>LOADING...</p>}>
        <article>
          {data.title && <h2 className="mb-4 text-2xl capitalize">{data.title}</h2>}
          {data.body && <div className="blog-ct text-md lg:text-xl">{data.body}</div>}
        </article>
      </Suspense>
    </div>
  )
}

export default Content
