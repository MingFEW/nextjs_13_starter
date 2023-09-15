interface IBlogListProps {
  dataList: IPost[]
}

const BlogList = ({ dataList }: IBlogListProps) => {
  return (
    <div className="pt-8">
      {dataList.length <= 0 && <p>No Post</p>}
      {dataList.length > 0 && (
        <div className="flex flex-col gap-6">
          {dataList.map((itm: IPost) => {
            const { title, body } = itm
            return <div className="border-[#222222] border rounded-lg p-4">
                <h4 className="text-xl capitalize mb-2">{title}</h4>
                <div className="text-[#999999]">{body}</div>
                </div>
          })}
        </div>
      )}
    </div>
  )
}

export default BlogList
