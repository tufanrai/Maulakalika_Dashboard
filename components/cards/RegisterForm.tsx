"use client";
import React from "react";

const RegisterForm = () => {
  return (
    <div className="max-w-[30%] w-full rounded-md p-4 border border-slate-100 bg-white shadow-xl/30">
      <h1 className="w-full text-center font-semibold text-xl text-stone-600">
        Register
      </h1>
      <form className="w-full flex flex-col items-start justify-start gap-3">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label>Full name</label>
          <input
            type="text"
            placeholder="Jhon Doe"
            className="w-full rounded-sm px-5 py-2 font-medium text-lg text-stone-800 outline-none bg-slate-50 border border-slate-100 "
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label>Contact</label>
          <input
            type="text"
            placeholder="977 - 9812345670"
            className="w-full rounded-sm px-5 py-2 font-medium text-lg text-stone-800 outline-none bg-slate-50 border border-slate-100 "
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label>Email</label>
          <input
            type="text"
            placeholder="jhon@example.com"
            className="w-full rounded-sm px-5 py-2 font-medium text-lg text-stone-800 outline-none bg-slate-50 border border-slate-100 "
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full rounded-sm px-5 py-2 font-medium text-lg text-stone-800 outline-none bg-slate-50 border border-slate-100 "
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full rounded-sm px-5 py-2 font-medium text-lg text-stone-800 outline-none bg-slate-50 border border-slate-100 "
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <button className="w-full rounded-sm px-5 py-2 font-semibold text-lg text-white outline-none bg-blue-500 border border-blue-100 cursor-pointer ease duration-300 hover:bg-blue-600">
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
