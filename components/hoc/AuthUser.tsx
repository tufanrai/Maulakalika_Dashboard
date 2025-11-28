"use client";
import React from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function WithAuthorization<T>(
  Component: React.ComponentType<T>,
  roles: string[]
) {
  return function WithAuthentication(props: any) {
    // login
    const router = useRouter();
    const token = Cookies.get("accessToken");
    React.useEffect(() => {
      if (typeof token == undefined) {
        toast.error("token mising: please login");
        router.replace("/auth/login");
      }

      const decoded: { exp: number; role: string } = jwtDecode(token ?? "");

      if (decoded.exp <= Math.floor(Date.now() / 1000)) {
        toast.error("session expired: please login");
        Cookies.remove("accessToken");
        setTimeout(() => {
          router.replace("/auth/login");
        });
      }

      if (!roles.includes(decoded.role!)) {
        toast.error("unauthorised access: access denied");
        Cookies.remove("accessToken");
        setTimeout(() => {
          router.replace("/auth/login");
        });
      }
    }, []);

    return <Component {...props} />;
  };
}

export default WithAuthorization;
