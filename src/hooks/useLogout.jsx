import  { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { BlogContext } from "../Context/BlogContext"

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext)
  const { dispatch:blogDispatch } = useContext(BlogContext)

  const logout = () => {
    localStorage.removeItem("user")
    blogDispatch({ type: "SET_BLOGS", payload: [] })
    dispatch({ type: "LOGOUT" })
  }
  return logout
}
