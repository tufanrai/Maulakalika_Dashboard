"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { RegisterNewUser } from "@/app/api/auth.api";
import toast from "react-hot-toast";
import { RegisterSchema } from "@/components/schema/FormSchema";
import { IRegister, IRoles } from "@/components/interfaces/interfaces";
import { useForm } from "react-hook-form";
import Admins_list_card from "@/components/cards/Admins_list_card";
import SuperAdminAuthorization from "@/components/hoc/SuperAdminAuth";

const page = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: RegisterNewUser,
    mutationKey: ["new user"],
    onSuccess: (data) => {
      toast.success(data?.message);
      reset();
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
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto bg-slate-100 px-5 py-8">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-slate-900">Admins</h1>
      </div>

      {/* Create new Admin user */}
      <div className="w-full p-4 bg-white rounded-md shadow shadow-lg/30">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-slate-900">New Admin</h1>
          <p className="text-slate-600 mt-2">Assing new member as an admin.</p>
        </div>
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
              <option value={IRoles.admin}>Admin</option>
              <option value={IRoles.user}>User</option>
              <option value={IRoles.superAdmin}>Super Admin</option>
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
      </div>

      {/* List all the admin users */}
      <div className="w-full p-4 bg-white rounded-md shadow shadow-lg/30 mt-10">
        <Admins_list_card />
      </div>
    </div>
  );
};

// export default SuperAdminAuthorization(page, ["Super Admin"]);
export default page;
