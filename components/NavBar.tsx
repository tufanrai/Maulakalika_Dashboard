"use client";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegFilePdf, FaImage, FaTrash } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="md:max-w-[280px] w-full md:h-screen bg-navColor flex flex-col items-center jusitfy-start gap-4 py-4">
      {/* Logo */}
      <div className="w-full flex items-center justify-start ml-19 mt-4 py-1 gap-3">
        <div className="font-black text-3xl text-white p-2 rounded-lg bg-Green">
          <LuLayoutDashboard />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-lg text-white">Admin</h1>
          <p className="font-thin text-sm text-stone-200">Dashboard</p>
        </div>
      </div>
      <hr className="w-full h-[2px] hidden md:block rounded-sm bg-neutral-300/70" />
      {/* Nav */}
      <ul className="w-full h-2/1 py-8 hidden md:block flex flex-col items-center justify-start gap-1 px-2">
        <li className="w-full px-2 flex justify-center">
          <Link className="w-full" href={"/"}>
            <button className="w-full py-3 rounded-md flex items-center justify-start pl-10 gap-1 cursor-pointer font-semibold text-md text-white ease duration-300 hover:bg-Green hover:shadow-lg/30 hover:shadow-Green">
              <LuLayoutDashboard />{" "}
              <span className="hidden md:block">Dashboard</span>
            </button>
          </Link>
        </li>
        <li className="w-full px-2 flex justify-center">
          <Link className="w-full" href={"/files"}>
            <button className="w-full py-3 rounded-md flex items-center justify-start pl-10 gap-1 cursor-pointer ease duration-300 hover:bg-Green hover:shadow-Green font-semibold text-md text-white">
              <FaRegFilePdf /> <span className="hidden md:block">Files</span>
            </button>
          </Link>
        </li>
        <li className="w-full px-2 flex justify-center">
          <Link className="w-full" href={"/images"}>
            <button className="w-full py-3 rounded-md flex items-center justify-start pl-10 gap-1 cursor-pointer ease duration-300 hover:bg-Green hover:shadow-Green font-semibold text-md text-white">
              <FaImage /> <span className="hidden md:block">Images</span>
            </button>
          </Link>
        </li>
        <li className="w-full px-2 flex justify-center">
          <Link className="w-full" href={"/setting"}>
            <button className="w-full py-3 rounded-md flex items-center justify-start pl-10 gap-1 cursor-pointer ease duration-300 hover:bg-Green hover:shadow-lg/30 hover:shadow-Green font-semibold text-md text-white">
              <IoSettingsOutline />{" "}
              <span className="hidden md:block">Setting</span>
            </button>
          </Link>
        </li>
        <li className="w-full px-2 flex justify-center mt-auto">
          <button
            onClick={() => {
              Cookies.remove("accessToken");
              setTimeout(() => {
                router.replace("/auth/login");
              }, 2000);
            }}
            className="w-full py-3 rounded-md flex items-center justify-start pl-10 gap-1 cursor-pointer font-semibold text-md text-white"
          >
            <CiLogin /> <span className="hidden md:block">Signout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
