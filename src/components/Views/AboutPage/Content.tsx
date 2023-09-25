interface IContentProps {
  data: IPost
}

const Content = async ({ data }: IContentProps) => {
  return (
    <div className="pt-8">
      <article>
        {data.title && <h2 className="mb-4 text-2xl capitalize">{data.title}</h2>}
        {data.body && <div className="blog-ct text-md tracking-wider text-[#666666] lg:text-[24px]">{data.body}</div>}
      </article>
    </div>
  )
}

export default Content
