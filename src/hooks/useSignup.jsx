import { useContext, useState } from "react"
import { UrlContext } from "../Context/UrlContext"
import { AuthContext } from "../Context/AuthContext"

export const useSignup = () => {
  const { url } = useContext(UrlContext)
  const { dispatch } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const signup = async (credentials) => {
    try {
      setError(null)
      setLoading(true)
      const response = await fetch(`${url}/user/signup`, {
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
      localStorage.setItem('user',JSON.stringify(data.details))
      dispatch({ type: "LOGIN", payload: data.details })
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { signup, loading, error }
}
