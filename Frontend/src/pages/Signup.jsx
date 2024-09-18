import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    // console.log(data);
    // You can add logic to handle the signup submission
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    }
   await axios.post("https://ebooks-66rr.onrender.com/user/signup", userInfo)
    .then((res)=>{
      if(res.data){
        console.log(res.data)
        toast.success("Signup Successfully")
      }
      localStorage.setItem("UserInfo", JSON.stringify(res.data.userInfo))
    })
    .catch((e)=>{
      console.log(e)
      if(e.response)
        console.log(e.response.data.message)
          toast.error(e.response.data.message)
    })
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen flex items-center justify-center dark:bg-slate-900`}>
      {/* Toggle Dark/Light Mode */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn btn-sm bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          onClick={() => navigate('/')}
          className="btn btn-sm bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
         Home 
        </button>
      </div>

      <div className="max-w-md w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white animate-fadeIn">
          Create Your Account
        </h2>

        {/* Signup Form */}
        <form className="space-y-4 animate-slideUp" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-300">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-300">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-xl transform transition-all hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-400 animate-fadeIn">
          Already have an account?{" "}
          <button className="text-purple-500 hover:underline" onClick={() => navigate("/login")}>
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
