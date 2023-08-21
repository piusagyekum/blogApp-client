
const BlogForm = () => {

  
  return (
    <form id="add-blog-form" action="" className="">
      <label htmlFor="">Title</label>
      <input type="text" placeholder="Enter a title" />
      <label htmlFor="">Snippet</label>
      <input type="text" placeholder="Enter a snippet" />
      <label htmlFor="">Body</label>
      <textarea
        name=""
        id=""
        rows={2}
        placeholder="Enter the content..."
      ></textarea>
      <input type="submit" value="Add Blog" />
    </form>
  )
}

export default BlogForm
