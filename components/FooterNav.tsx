"use client";
import Link from "next/link";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegFilePdf, FaImage } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const FooterNav = () => {
  const router = useRouter();
  return (
    <div className="md:max-w-[280px] w-full md:h-screen block md:hidden bg-navColor flex flex-col items-center jusitfy-start gap-4">
      <ul className="w-full h-2/1 py-8  flex flex-row md:flex-col items-center justify-start gap-1 px-2">
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
          <Link className="w-full" href={"/"}>
            <button className="w-full py-3 rounded-md flex items-center justify-start pl-10 gap-1 cursor-pointer font-semibold text-md text-white ease duration-300 hover:bg-Green hover:shadow-lg/30 hover:shadow-Green">
              <LuLayoutDashboard />{" "}
              <span className="hidden md:block">Dashboard</span>
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
              localStorage.removeItem("user");
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

export default FooterNav;
