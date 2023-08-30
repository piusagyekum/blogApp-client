import Layout from "./components/Layout"
import Home from "./Pages/Home"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"

function App() {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route index element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />
        <Route
          element={!user ? <Navigate to="/" replace state={{ from: location }} /> : <Layout />}
        >
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
