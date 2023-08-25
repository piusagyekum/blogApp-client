import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useContext, useState } from "react"
import { UrlContext } from "../Context/UrlContext"
import { BlogContext } from "../Context/BlogContext"
const BlogForm = () => {
  const { url } = useContext(UrlContext)
  const { dispatch } = useContext(BlogContext)
  const form = useForm()
  const { register, control, handleSubmit, formState , reset} = form
  const [addingBlog, setAddingBlog] = useState(false)

  const submitFunction = async formData => {
    try {
      setAddingBlog(true)
      const response = await fetch(`${url}/blogs/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json()
      if (response.ok) {
        dispatch({ type: "ADD_BLOG", payload: json.result })
        reset()

      } else {
        throw Error("Response was not in the 200 range")
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      setAddingBlog(false)
    }
  }

  return (
    <>
      <form
        id="add-blog-form"
        action=""
        className=""
        noValidate
        onSubmit={handleSubmit(submitFunction)}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter a title"
          {...register("title", { required: "Blog Title is required" })}
        />
        <p className="error">{formState.errors.title?.message}</p>
        <label htmlFor="snippet">Snippet</label>
        <input
          type="text"
          id="snippet"
          placeholder="Enter a snippet"
          {...register("snippet", { required: "Blog Snippet is required" })}
        />
        <p className="error">{formState.errors.snippet?.message}</p>

        <label htmlFor="body">Body</label>
        <textarea
          name=""
          id="body"
          rows={2}
          placeholder="Enter the content for the blog..."
          {...register("body", { required: "Blog content is required" })}
        />
        <p className="error">{formState.errors.body?.message}</p>
        <input
          type="submit"
          value={addingBlog ? "Adding..." : "Add Blog"}
          disabled={addingBlog ? true : false}
        />
      </form>
      <DevTool control={control} />
    </>
  )
}

export default BlogForm
