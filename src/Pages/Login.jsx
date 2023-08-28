import { useForm } from "react-hook-form"
import useLogin from "../hooks/useLogin"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const { loading, error, login } = useLogin()


  const loginForm = useForm()
  const { register, handleSubmit, formState } = loginForm
  const loginFn = async (loginCredentials) => {
    await login(loginCredentials)
  }

  return (
    <div className="grid place-items-center min-h-screen ">
      <form
        id="login-form"
        className="bg-white p-5 rounded-md"
        noValidate
        onSubmit={handleSubmit(loginFn)}
      >
        <h3 className="text-xl font-bold text-center mb-1">Login</h3>
        {error && (
          <p className="border border-red-600 text-red-600 bg-red-100 text-xs rounded-md px-3 leading-10 mb-2">
            {error}
          </p>
        )}
        <div className="form-control mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your email"
            className="w-full h-10 border bg-gray-50 px-3 mb-3"
            {...register("email", {
              required: "Email is required",
            })}
            onChange={(e) => { console.log(e.target.value) }}
          />
          <p className="text-red-600 text-xs">
            {formState.errors?.email?.message}
          </p>
        </div>
        <div className="form-control mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Please enter your password"
            className="w-full h-10 border bg-gray-50 px-3 mb-3"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <p className="text-red-600 text-xs">
            {formState.errors?.password?.message}
          </p>
        </div>
        <input type="submit" value="Login" className="" />
      </form>
    </div>
  )
}

export default Login
