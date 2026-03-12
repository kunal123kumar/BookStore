import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  const UserInfo = {
    email: data.email,
    password: data.password,
  };
  await axios
    .post("http://localhost:3000/user/login", UserInfo)
    .then((res) => {
      if (res.data) {
        toast.success("User logged in successfully!");
        
        // Store data from the server response
        localStorage.setItem("login", "true"); // Make sure to store "true" as string
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        
        // Dispatch custom event to notify Navbar
        window.dispatchEvent(new Event("loginStatusChanged"));
        
        document.getElementById("login_modal").close();
      }
    })
    .catch((error) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    });
};

  return (
    <dialog id="login_modal" className="modal">
      <div className="modal-box bg-white dark:bg-slate-800">
        {/* Close button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <h3 className="font-bold text-2xl mb-4 text-black dark:text-white">
          Welcome! Please Login
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white dark:bg-slate-700 text-black dark:text-white focus:outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-white dark:bg-slate-700 text-black dark:text-white focus:outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Login Button & Signup Link */}
          <div className="flex justify-between items-center mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <p className="text-sm text-black dark:text-white">
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-blue-500 underline cursor-pointer hover:text-blue-600"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Click outside to close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;
