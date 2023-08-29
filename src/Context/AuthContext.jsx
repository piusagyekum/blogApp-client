import { createContext, useEffect, useReducer } from "react"

export const AuthContext = createContext()

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload }
    case "LOGOUT":
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null })

  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    console.log("🚀 ~ file: AuthContext.jsx:21 ~ useEffect ~ user:", user)

    if (user) dispatch({ type: "LOGIN", payload: user })
  }, [dispatch])

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
