import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const modalRef = useRef(null); // Create a ref for the modal

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Close the modal after submission if needed
    modalRef.current.close();
  };

  return (
    <div>
      {/* Modal */}
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box bg-white dark:bg-gray-800 dark:text-white">
          {/* Close Button */}
          <button
            onClick={() => modalRef.current.close()} // Close the modal without navigating
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          {/* Login Form */}
          <h3 className="font-bold text-center text-2xl">Login</h3>
          <form className="space-y-4 form-control" onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              <span className="label-text dark:text-gray-300">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}

            <label className="label">
              <span className="label-text dark:text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}

            <button className="btn btn-primary w-full mt-4">Login</button>
            <p className="dark:text-white">
              Not Registered yet? <Link to="/signup" className="link link-primary">Register</Link>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
