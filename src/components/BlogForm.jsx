import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useContext } from "react"
import { UrlContext } from "../Context/UrlContext"
import { BlogContext } from "../Context/BlogContext"
const BlogForm = () => {
  const { url } = useContext(UrlContext)
  const { dispatch } = useContext(BlogContext)
  const form = useForm()
  const { register, control, handleSubmit, formState } = form

  const submitFunction = async formData => {
    try {
      const response = await fetch(`${url}/blogs/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json()
      if (response.ok) {
        console.log(json.result)
        dispatch({type:'ADD_WORKOUT', payload:json.result})
      } else {
        throw "Response was not in the 200 range"
      }
    } catch (error) {
      console.log(error)
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
        <input type="submit" value="Add Blog" />
      </form>
      <DevTool control={control} />
    </>
  )
}

export default BlogForm
