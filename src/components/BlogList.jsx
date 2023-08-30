import { MdDelete } from "react-icons/md"
import { format } from "date-fns"
import { useContext } from "react"
import { UrlContext } from "../Context/UrlContext"
import { BlogContext } from "../Context/BlogContext"
import { AuthContext } from "../Context/AuthContext"

const BlogList = ({ blog }) => {
  const { url } = useContext(UrlContext)
  const {dispatch} = useContext(BlogContext)
  const {user} = useContext(AuthContext)

  const deleteBlogFn = async () => {
    try {
      const response = await fetch(`${url}/blogs/${blog._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`,
          
        },
      })

      const json = await response.json()

      if (response.ok) {
        console.log(json.result._id)
        dispatch({ type: "DELETE_BLOG", payload: json.result._id })
      } else {
        throw Error("Response was not in the 200 range")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-white rounded-lg mb-2 p-3 flex shadow">
      <div className="flex-1">
        <p className="text-[var(--accent)] font-semibold text-lg">
          {blog?.title}
        </p>
        <p className="mb-1">{blog?.snippet}</p>
        <p className="text-xs text-gray-500">
          Created: {format(new Date(blog.createdAt), "Pp")}
        </p>
      </div>
      <MdDelete
        size={20}
        className="text-gray-600 hover:text-gray-800 cursor-pointer"
        onClick={deleteBlogFn}
      />
    </div>
  )
}

export default BlogList
