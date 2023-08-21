import  { useEffect, useState } from "react"
import BlogList from "../components/BlogList"

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState([])
  const url = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    console.log('use effect')
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}/blogs`)
        const data = await response.json()
        setBlogs(data?.blogs)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [url])
  return (
    <main className="grid grid-cols-12 gap-10 px-10">
      <div className=" col-span-12 md:col-span-8 bg-black/70">
        {blogs && blogs.map(blog => <BlogList key={blog.id} blog={blog} />)}
        {loading ? <p className='text-center'>Loading blogs....</p> : ""}
        {!loading && blogs.length === 0 ? <p>No blogs to display</p> : ""}
      </div>
      <div className=" col-span-12 md:col-span-4">
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
      </div>
    </main>
  )
}

export default Home
