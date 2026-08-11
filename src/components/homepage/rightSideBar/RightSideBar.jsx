import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";

const RightSideBar = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold mb-3">Login With</h2>

      <div className="space-y-2">
        <button className="flex items-center gap-2 p-2">
          <GrGoogle /> Login with Google
        </button>
        <button className="flex items-center gap-2 p-2">
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
