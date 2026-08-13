"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    // console.log(data);
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };

  return (
    <div className="min-h-[80vh] container mx-auto bg-slate-100 my-10 flex items-center justify-center">
      <div className="p-8 bg-white w-8/12">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>

        <div className="divider"></div>

        <form action="" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="name">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="input container"
              placeholder="Enter your email address"
              {...register("email", { required: "this field is required" })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <label className="label text-lg font-medium " htmlFor="name">
              Password
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              id="password"
              className="input container"
              placeholder="Enter your password"
              {...register("password", { required: "this field is required" })}
            />

            <span
              className="absolute right-3 top-12 text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>

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

export default LoginPage;
