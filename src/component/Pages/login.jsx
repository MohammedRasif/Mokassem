import img from "../../image/Group.png";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // For password visibility toggle
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg-start to-dark-bg-end p-4 bg-black">
      <div className="w-full max-w-xl bg-card-bg text-white border border-border-dark rounded-lg shadow-lg bg-gradient-to-br from-gray-700/50 via-gray-700 to-gray-700/50">
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-3xl font-bold">
            {/* EARTH AI-Q logo/text */}
            <img src={img} alt="" />
            <span>EARTH AI-Q</span>
          </div>
          <h1 className="text-3xl font-semibold">Sign in</h1>
          <p className="text-text-dark-grey">
            Please login to continue to your account.
          </p>
        </div>
        <div className="p-6 pt-0 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-text-light-grey text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="jonas_kahnwald@gmail.com"
              className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey focus:outline-none focus:ring-0 focus:border-blue-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-text-light-grey text-sm">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="flex h-10 w-full rounded-md border border-border-dark bg-input-bg px-3 py-2 text-sm text-white placeholder:text-text-dark-grey pr-10 focus:outline-none focus:ring-0 focus:border-blue-primary"
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
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="keep-logged-in"
                className="h-4 w-4 rounded border border-border-dark bg-input-bg text-blue-primary focus:ring-blue-primary focus:ring-offset-0 focus:ring-offset-card-bg checked:bg-blue-primary checked:border-blue-primary"
              />
              <label
                htmlFor="keep-logged-in"
                className="text-text-light-grey cursor-pointer"
              >
                Keep me logged in
              </label>
            </div>
            <a href="#" className="text-blue-primary hover:underline">
              Forgot your password?
            </a>
          </div>
          <button className="w-full h-10 bg-blue-primary hover:bg-blue-hover text-white font-semibold py-2 rounded-md bg-blue-600 cursor-pointer">
            Sign in
          </button>
          <div className="relative flex items-center justify-center text-xs uppercase text-text-dark-grey">
            <span className="relative z-10 bg-card-bg px-2">or</span>
          </div>
          <button className="w-full h-10 bg-button-google-bg hover:bg-button-google-hover-bg text-white border border-border-dark font-semibold py-2 rounded-md flex items-center justify-center space-x-2">
            {/* Google icon */}
            <FcGoogle size={22} />

            <span>Sign in with Google</span>
          </button>
        </div>
        <div className="p-6 pt-0 text-center text-sm text-text-dark-grey">
          Need an account?{" "}
          <a href="#" className="text-blue-primary hover:underline">
            join now
          </a>
        </div>
      </div>
    </div>
  );
}
