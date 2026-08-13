"use client";
import Image from "next/image";
import avater from "@/assets/user.png";
import NavLink from "./shared/NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <div className="flex  items-center justify-between container">
      <div></div>

      <ul className="flex items-center justify-between gap-4 text-gray-500">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/career"}>Career</NavLink>
      </ul>

      {user ? (
        <div className="flex items-center gap-3">
          <h2 className="text-purple-800">hello,{user.name}!</h2>
          <Image
            src={user.image || avater}
            width={40}
            height={40}
            alt="user image"
            className="rounded-full"
          ></Image>
          <Link href={"/login"}>
            <button
              onClick={async () => await authClient.signOut()}
              className="btn bg-purple-500 text-white rounded-full"
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <Link href={"/login"}>
          <button className="btn bg-purple-500 text-white rounded-full">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
