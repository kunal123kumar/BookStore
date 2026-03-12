import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit =  async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:3000/user/signup", userInfo)
    .then((res) => {
      if(res.data){
        toast.success("User created successfully!");
        window.location.href = "/";
      }
      localStorage.setItem("User", JSON.stringify(res.data.user));
    }).catch((error) => {
      if(error.response){
        toast.error(error.response.data.message);
      }
    })
  };

  // Watch password field to compare with confirm password
  const password = watch("password");

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="relative w-full max-w-md p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
          {/* Close Button - Responsive */}
          <Link to="/">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </Link>

          <h1 className="mb-6 text-3xl font-bold text-center text-gray-900 dark:text-white">
            Create Account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white
                     border-gray-300 dark:border-slate-600
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white
                     border-gray-300 dark:border-slate-600
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white
                     border-gray-300 dark:border-slate-600
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white
                     border-gray-300 dark:border-slate-600
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2.5 text-white font-semibold rounded-lg
                   bg-blue-500 hover:bg-blue-600
                   focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Sign Up
            </button>

            {/* Footer */}
            <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;