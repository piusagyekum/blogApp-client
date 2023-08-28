import  { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { UrlContext } from "../Context/UrlContext"
import { useNavigate } from "react-router-dom"

const useLogin = () => {
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { url } = useContext(UrlContext)
  const login = async (credentials) => {
    try {
      setError(null)
      setLoading(true)
      const response = await fetch(`${url}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
      const data = await response.json()
      if (!response.ok) {
        throw Error(data.message)
      }
      localStorage.setItem("user", JSON.stringify(data.details))
      dispatch({ type: "LOGIN", payload: data.details })
          navigate("/home", { replace: true })

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, error, login }
}

export default useLogin
