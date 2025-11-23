"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../schema/FormSchema";
import { ILogin } from "../interfaces/interfaces";
import { useMutation } from "@tanstack/react-query";
import { LoginUser } from "@/app/api/auth.api";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: LoginUser,
    mutationKey: ["Log user"],
    onSuccess: (data) => {
      toast.success(data?.message);
      Cookies.set("accessToken", data?.token);
      localStorage.setItem("user", JSON.stringify(data));
      reset();
      setTimeout(() => {
        router.replace("/");
      }, 3000);
    },
    onError: (err) => {
      toast.error(err.message);
      reset();
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // submit function
  const LogUser = (data: ILogin) => {
    mutate(data);
  };

  return (
    <div className="md:max-w-[30%] w-full rounded-md p-4 border border-slate-100 bg-white shadow-xl/30">
      <h1 className="w-full text-center font-semibold text-xl text-stone-600">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(LogUser)}
        className="w-full flex flex-col items-start justify-start gap-3"
      >
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">
            Email
          </label>
          <input
            type="text"
            placeholder="jhon@example.com"
            {...register("email")}
            className="w-full rounded-sm px-5 py-2 font-regural text-sm text-slate-800 outline-none bg-slate-50 border border-slate-100 shadow-md/30 shadow-slate-50"
          />
          {errors.email && errors.email.message ? (
            <p className="w-full text-end font-thin text-xs text-red-500 px-4 py-2">
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            {...register("password")}
            className="w-full rounded-sm px-5 py-2 font-regural text-sm text-slate-800 outline-none bg-slate-50 border border-slate-100 shadow-md/30 shadow-slate-50"
          />
          {errors.password && errors.password.message ? (
            <p className="w-full text-end font-thin text-xs text-red-500 px-4 py-2">
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex justify-end">
          <a
            className="block text-sm font-medium text-stone-300 ease duration-300 hover:text-stone-500"
            href="/"
          >
            Forgot password?
          </a>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <button
            type="submit"
            className="w-full rounded-sm px-5 py-2 font-semibold text-lg text-white outline-none bg-blue-500 border border-blue-100 cursor-pointer ease duration-300 hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
      <hr className="w-full h-1 my-8 border-slate-200" />
      <div className="w-full flex items-center justify-center">
        <p className="block text-sm font-medium  text-slate-400">
          Don't have an account?{" "}
          <a
            className="underline font-medium text-blue-400 ease duration-300 hover:text-blue-500"
            href="/auth/register"
          >
            Register account
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
