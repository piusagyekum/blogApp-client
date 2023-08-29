import Layout from "./components/Layout"
import Home from "./Pages/Home"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"

function App() {
  const {user} =  useContext(AuthContext)
  const location = useLocation()
  // const { user } = useContext(AuthContext)
  console.log("🚀 ~ file: App.jsx:12 ~ App ~ user:", user)


  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={!user ? <Navigate to="/" replace state={{from:location}} /> : <Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
