import { createContext, useReducer } from "react"

export const BlogContext = createContext()
const blogReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return { blogs: action.payload }
    case "ADD_WORKOUT":
      return { blogs: [action.payload, ...state.blogs] }
    default:
      return state
  }
}

export const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, { blogs:[] })
  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}
