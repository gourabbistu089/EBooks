import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4000/user/signin", userInfo)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          toast.success("Login Successfully");
        }
        localStorage.setItem("UserInfo", JSON.stringify(res.data.user));
        navigate("/"); // Redirect after successful login
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        if (e.response) {
          console.log(e.response.data.message);
          toast.error(e.response.data.message);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Login Card */}
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transform transition-all hover:scale-105"
         >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            Not Registered yet?{" "}
            <Link to="/signup" className="text-blue-500 dark:text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
