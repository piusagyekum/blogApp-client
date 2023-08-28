import { useForm } from "react-hook-form"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const { loading, error, signup } = useSignup()
  const signupForm = useForm()
  const { register, handleSubmit, formState } = signupForm
  const signupFn = async (credentials) => {
    await signup(credentials)
  }

  return (
    <div className="grid place-items-center min-h-screen ">
      <form
        id="signup-form"
        className="bg-white p-5 rounded-md"
        noValidate
        onSubmit={handleSubmit(signupFn)}
      >
        <h3 className="text-xl font-bold text-center mb-1">Signup</h3>
        {error && (
          <p className="border border-red-600 text-red-600 bg-red-100 text-xs rounded-md px-3 leading-10 mb-2">
            {error}
          </p>
        )}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your email"
            className="w-full h-10 border bg-gray-50 px-3 mb-3"
            {...register("email", {
              required: "Email is required",
            })}
          />
          <p className="text-red-600 text-xs">
            {formState.errors?.email?.message}
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="email">Password</label>
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
            {formState.errors?.email?.message}
          </p>
        </div>

        <input type="submit" value={"sign up"} className="" />
      </form>
    </div>
  )
}

export default Signup
