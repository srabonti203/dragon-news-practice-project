"use client";

import { authClient } from "@/lib/auth-client";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";

const RightSideBar = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };

  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold mb-3">Login With</h2>

      <div className="space-y-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn flex items-center gap-2 p-2"
        >
          <GrGoogle /> Login with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          className="flex items-center gap-2 p-2 btn"
        >
          <IoLogoGithub /> Login with GitHub
        </button>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Find Us On</h2>
        <button className="flex items-center gap-2 border p-2 container">
          <FaFacebook />
          Facebook
        </button>
        <button className="flex items-center gap-2 p-2 border container">
          <AiFillTwitterCircle />
          Twitter
        </button>
        <button className="flex items-center gap-2 p-2 border container">
          <FaSquareInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
