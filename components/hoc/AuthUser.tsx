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
    const router = useRouter();

    React.useEffect(() => {
      const token = Cookies.get("accessToken");

      // 1. Token missing
      if (!token) {
        toast.error("token missing: please login");
        router.replace("/auth/login");
        return;
      }

      // 2. Token exists but might be garbage → decode carefully
      let decoded: { exp: number; role: string };
      try {
        decoded = jwtDecode(token);
      } catch (e) {
        toast.error("invalid token: please login again");
        Cookies.remove("accessToken");
        router.replace("/auth/login");
        return;
      }

      // 3. Expired token
      if (decoded.exp < Math.floor(Date.now() / 1000)) {
        toast.error("session expired: please login");
        Cookies.remove("accessToken");
        router.replace("/auth/login");
        return;
      }

      // 4. Unauthorized role
      if (!roles.includes(decoded.role)) {
        toast.error("unauthorised access: access denied");
        Cookies.remove("accessToken");
        router.replace("/auth/login");
        return;
      }
    }, []);

    return <Component {...props} />;
  };
}

export default WithAuthorization;
