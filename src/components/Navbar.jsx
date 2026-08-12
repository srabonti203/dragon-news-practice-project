import Image from "next/image";
import avater from "@/assets/user.png";
import NavLink from "./shared/NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex  items-center justify-between container">
      <div></div>

      <ul className="flex items-center justify-between gap-4 text-gray-500">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/career"}>Career</NavLink>
      </ul>

      <div className="flex items-center gap-2">
        <Image
          src={avater}
          width={40}
          height={40}
          alt="user-image"
          className=""
        ></Image>
        <Link href={"/login"}>
          <button className="btn bg-purple-500 text-white rounded-full">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
