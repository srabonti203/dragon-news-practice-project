"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-[80vh] container mx-auto bg-slate-100 my-10 flex items-center justify-center">
      <div className="p-8 bg-white w-8/12">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>

        <div className="divider"></div>

        <form action="" onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="input container"
              placeholder="Enter your email address"
              {...register("name")}
              {...register("name", { required: "this field is required" })}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="name">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="input container"
              placeholder="Enter your email address"
              {...register("email")}
              {...register("email", { required: "this field is required" })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-lg font-medium " htmlFor="name">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="input container"
              placeholder="Enter your password"
              {...register("password")}
              {...register("password", { required: "this field is required" })}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </fieldset>
          <button className="btn bg-slate-900 text-white container mt-4 rounded-md">
            Login
          </button>
          <p className="text-center mt-4">
            Dont have an account?
            <Link className="p-2 text-red-500" href={"/registration"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
