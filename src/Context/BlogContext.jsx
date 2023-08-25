import { createContext, useReducer } from "react"

export const BlogContext = createContext()
const blogReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return { blogs: action.payload }
    case "ADD_BLOG":
      return { blogs: [action.payload, ...state.blogs] }
    case "DELETE_BLOG":
      return {
        blogs: state.blogs.filter(blog => {
          return blog._id !== action.payload
        }),
      }
    default:
      return state
  }
}

export const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, { blogs: [] })
  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}
