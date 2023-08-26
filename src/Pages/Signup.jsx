import { useForm } from "react-hook-form"
const Signup = () => {
  const signupForm = useForm()
  const {
    register,
    handleSubmit,
    formState: { error },
  } = signupForm
  const signupFn = formData => {
    console.log("🚀 ~ file: signup.jsx:6 ~ signupFn ~ formData:", formData)
  }

  return (
    <div className="grid place-items-center min-h-screen ">
      <form
        id="signup-form"
        className="bg-white p-5 rounded-md"
        noValidate
        onSubmit={handleSubmit(signupFn)}
      >
        <h3 className="text-xl font-bold text-center mb-1">signup</h3>
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
        </div>
        <input type="submit" value="signup" className="" />
      </form>
    </div>
  )
}

export default Signup
