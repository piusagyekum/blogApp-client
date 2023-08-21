import { MdDelete } from "react-icons/md"
import { format } from "date-fns"
const BlogList = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg mb-2 p-3 flex ">
      <div className="flex-1">
        <p className="text-[var(--accent)] font-semibold text-lg">{blog?.title}</p>
        <p className="mb-1">{blog?.snippet}</p>
        <p className="text-xs text-gray-500">
          Created: {format(new Date(blog.createdAt), "Pp")}
        </p>
      </div>
      <MdDelete
        size={20}
        className="text-gray-600 hover:text-gray-800 cursor-pointer"
      />
    </div>
  )
}

export default BlogList
