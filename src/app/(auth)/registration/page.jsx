"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleRegistration = async (data) => {
    // console.log(data);
    const { name, photo, email, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignedUp successfully.");
      router.push("/");
    }
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
              {...register("name", { required: "this field is required" })}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="name">
              Your Photo
            </label>
            <input
              type="text"
              id="photo"
              className="input container"
              placeholder="Enter your email address"
              {...register("photo", { required: "this field is required" })}
            />
            {errors.photo && (
              <span className="text-red-600">{errors.photo.message}</span>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
