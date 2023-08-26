import Layout from "./components/Layout"
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"

function App() {
  return (
    <>
      <Routes location={`/signup`}>
        <Route index element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
