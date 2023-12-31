import { useContext, useEffect, useState } from "react"
import BlogList from "../components/BlogList"
import BlogForm from "../components/BlogForm"
import { BlogContext } from "../Context/BlogContext"
import { AuthContext } from "../Context/AuthContext"

const Home = () => {
  const { user } = useContext(AuthContext)
  const { blogs, dispatch } = useContext(BlogContext)
  const [loading, setLoading] = useState(false)
  const url = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}/blogs`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        const json = await response.json()
        if (response.ok) dispatch({ type: "SET_BLOGS", payload: json.blogs })
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    if (user) fetchPosts()
  }, [url, dispatch, user])

  return (
    <main className="grid grid-cols-12 gap-10 px-10">
      <div className=" col-span-12 md:col-span-8">
        {blogs && blogs.map((blog) => <BlogList key={blog._id} blog={blog} />)}
        {loading ? <p className="text-center">Loading blogs....</p> : ""}
        {!loading && blogs.length === 0 ? <p className="text-center">No blogs to display</p> : ""}
      </div>
      <div className=" col-span-12 md:col-span-4">
        <h3 className="font-semibold">Add New Blog</h3>
        <BlogForm />
      </div>
    </main>
  )
}

export default Home
