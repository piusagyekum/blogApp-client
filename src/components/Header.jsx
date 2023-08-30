import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import{useLogout} from "../hooks/useLogout"



const Header = () => {
  const {user} = useContext(AuthContext)
  const logout = useLogout()
  return (
    <header className="bg-white mb-8 shadow flex justify-between items-center w-screen">
      <h1 className="text-3xl font-bold p-7">BlogBuddy</h1>
      <div className="mr-8">
        <span className="hidden md:inline-block">{user.email}</span>
        <button className="border border-[var(--accent)] rounded-md p-2 ml-3 hover:bg-[var(--accent)]" onClick={logout}>Logout</button>
      </div>
    </header>
  )
}

export default Header
