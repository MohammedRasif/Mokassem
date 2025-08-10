
import img from "../../image/Group.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg-start to-dark-bg-end p-4 bg-black">
      <div className="w-full max-w-xl bg-card-bg text-white border border-border-dark rounded-lg shadow-lg bg-gradient-to-br from-gray-700/50 via-gray-700 to-gray-700/50">
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-3xl font-bold">
            <img src={img} alt="EARTH AI-Q Logo" />
            <span>EARTH AI-Q</span>
          </div>
          <h1 className="text-3xl font-semibold">Sign up</h1>
          <p className="text-text-dark-grey">
            Please sign up to create your account.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 pt-0 space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-text-light-grey text-sm">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jonas Kahnwald"
              className="flex h-10 w-full rounded-md border border-blue-500 px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-500"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-text-light-grey text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="jonas_kahnwald@gmail.com"
              className="flex h-10 w-full rounded-md border border-blue-500 px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-text-light-grey text-sm">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-dark-grey" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="flex h-10 w-full rounded-md border border-blue-500 pl-10 pr-10 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center text-text-dark-grey hover:bg-transparent hover:text-text-light-grey"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="keep-logged-in"
                className="h-4 w-4 rounded border border-blue-500 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                {...register("keepLoggedIn")}
              />
              <label
                htmlFor="keep-logged-in"
                className="text-text-light-grey cursor-pointer"
              >
                Keep me logged in
              </label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md cursor-pointer"
          >
            Sign Up
          </button>
          <div className="relative flex items-center justify-center text-xs uppercase text-text-dark-grey">
            <span className="relative z-10 bg-card-bg px-2">or</span>
          </div>
          <button
            type="button"
            className="w-full h-10 bg-button-google-bg hover:bg-button-google-hover-bg text-white border border-blue-500 font-semibold py-2 rounded-md flex items-center justify-center space-x-2"
          >
            <FcGoogle size={22} />
            <span>Sign in with Google</span>
          </button>
        </form>
        <div className="p-6 pt-0 text-center text-sm text-text-dark-grey">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
