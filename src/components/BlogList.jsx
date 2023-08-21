const BlogList = ({ blog }) => {
  return (
    <div>
      <p>{blog?.title}</p>
      <p>{blog?.snippet}</p>
    </div>
  )
}

export default BlogList
