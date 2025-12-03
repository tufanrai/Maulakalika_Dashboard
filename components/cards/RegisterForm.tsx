"use client";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../schema/FormSchema";
import { IRegister } from "../interfaces/interfaces";
import { useMutation } from "@tanstack/react-query";
import { RegisterNewUser } from "@/app/api/auth.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: RegisterNewUser,
    mutationKey: ["new user"],
    onSuccess: (data) => {
      toast.success(data?.message);
      reset();
      setTimeout(() => {
        router.replace("/auth/login");
      }, 2000);
    },
    onError: (err) => {
      toast.error(err?.message);
      reset();
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  // submit function
  const RegisterUser = (data: IRegister) => {
    mutate(data);
  };

  return (
    <div className="md:max-w-[40%] w-full rounded-md px-4 pt-2 pb-4 border border-slate-100 bg-white shadow-xl/30">
      <h1 className="w-full text-center font-semibold text-xl text-stone-600">
        Register
      </h1>
      <form
        onSubmit={handleSubmit(RegisterUser)}
        className="w-full flex flex-col items-start justify-start gap-2"
      >
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">
            Full name
          </label>
          <input
            type="text"
            placeholder="Jhon Doe"
            {...register("name")}
            className={`w-full rounded-sm px-5 py-2 font-regural text-sm outline-none border ${
              errors && errors.name
                ? "border-red-400 bg-red-50 text-red-500"
                : "bg-slate-50 text-slate-800 border-slate-100"
            }  shadow-md/30 shadow-slate-50`}
          />
          {errors.name && errors.name.message ? (
            <p className="w-full text-end font-regural text-xs text-red-500 px-4">
              {errors.name.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">
            Contact
          </label>
          <input
            type="text"
            placeholder="977 - 9812345670"
            {...register("contact")}
            className={`w-full rounded-sm px-5 py-2 font-regural text-sm outline-none border ${
              errors && errors.contact
                ? "border-red-400 bg-red-50 text-red-500"
                : "bg-slate-50 text-slate-800 border-slate-100"
            }  shadow-md/30 shadow-slate-50`}
          />
          {errors.contact && errors.contact.message ? (
            <p className="w-full text-end font-regural text-xs text-red-500 px-4">
              {errors.contact.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">
            Role
          </label>
          <select
            id="role"
            {...register("role")}
            className="w-full bg-slate-50 border border-slate-100 rounded-md px-3 py-2 
                   text-gray-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Choose a role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          {errors.role && errors.role.message ? (
            <p className="w-full text-end font-regural text-xs text-red-500 px-4">
              {errors.role.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 tracking-wide">
            Email
          </label>
          <input
            type="text"
            {...register("email")}
            placeholder="jhon@example.com"
            className={`w-full rounded-sm px-5 py-2 font-regural text-sm outline-none border ${
              errors && errors.email
                ? "border-red-400 bg-red-50 text-red-500"
                : "bg-slate-50 text-slate-800 border-slate-100"
            }  shadow-md/30 shadow-slate-50`}
          />
          {errors.email && errors.email.message ? (
            <p className="w-full text-end font-regural text-xs text-red-500 px-4">
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
            className={`w-full rounded-sm px-5 py-2 font-regural text-sm outline-none border ${
              errors && errors.password
                ? "border-red-400 bg-red-50 text-red-500"
                : "bg-slate-50 text-slate-800 border-slate-100"
            }  shadow-md/30 shadow-slate-50`}
          />
          {errors.password && errors.password.message ? (
            <p className="w-full text-end font-regural text-xs text-red-500 px-4">
              {errors.password.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <button
            type="submit"
            disabled={isPending}
            className={`w-full rounded-sm px-5 py-2 font-semibold text-lg text-white outline-none bg-blue-500 border border-blue-100 ${
              isPending ? "cursor-not-allowed" : "cursor-pointer"
            } ease duration-300 hover:bg-blue-600`}
          >
            Register
          </button>
        </div>
      </form>
      <hr className="w-full h-1 my-8 border-slate-200" />
      <div className="w-full flex items-center justify-center">
        <p className="font-thin text-slate-400">
          Already have an account?{" "}
          <a
            className="underline font-medium text-blue-400 ease duration-300 hover:text-blue-500"
            href="/auth/login"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
