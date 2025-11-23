"use client";
import { Loader2, Save } from "lucide-react";
import React, { useEffect, useState } from "react";
import { CiUser, CiMail, CiCamera } from "react-icons/ci";

interface IUser {
  name: string;
  email: string;
  contact: string;
  role: string;
  createdAt: string;
}

const ProfileCard = () => {
  const [user, setUser] = useState<undefined | IUser>(undefined);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user: IUser = JSON.parse(localStorage.getItem("user")!).admin;
      setUser(user);
    }
  }, []);
  return (
    <div className="md:max-w-[80%] w-full rounded-md bg-white px-5 pt-10 pb-5 border-slate-40 border border-slate-100 shadow-slate-100 shadow-sm/30">
      {/* image */}
      <div>
        <label className="text-base font-semibold text-slate-900 mb-4 block">
          Profile Photo
        </label>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <CiUser className="h-12 w-12 font-bold text-white rounded-full" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">{user?.name}</p>
            <p className="text-sm text-slate-500">{user?.email}</p>
            <p className="text-xs text-slate-400 mt-2">{user?.role}</p>
          </div>
        </div>
      </div>

      <div className="h-px bg-slate-200 mt-8" />

      {/* Personal Information */}
      <div className="mt-10">
        <h3 className="text-base font-semibold text-slate-900 mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="full_name">Full Name</label>
            <div className="relative">
              <CiUser className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                id="full_name"
                placeholder={user?.name}
                className="w-full pl-10 outline-none px-5 py-1 font-regural text-stone-800 border rounded-md border-slate-100 bg-slate-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email">Email Address</label>
            <div className="relative">
              <CiMail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                id="email"
                type="email"
                className="w-full pl-10 outline-none px-5 py-1 font-regural text-stone-800 border rounded-md border-slate-100 bg-slate-50"
                placeholder={user?.email}
              />
            </div>
          </div>

          <div className="space-y-2 flex flex-col">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              className="pl-10 outline-none px-5 py-1 font-regural text-stone-800 border rounded-md border-slate-100 bg-slate-50"
              type="tel"
              placeholder={user?.contact}
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-slate-200 mt-8" />

      {/* Account Information */}
      <div>
        <h3 className="text-base font-semibold text-slate-900 mb-4">
          Account Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-slate-900">Account Role</p>
              <p className="text-xs text-slate-500 mt-1">
                Your current role in the system
              </p>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium capitalize">
              {user?.role}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-slate-900">Member Since</p>
              <p className="text-xs text-slate-500 mt-1">
                Account creation date
              </p>
            </div>
            <span className="text-sm text-slate-600">{user?.createdAt}</span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-6 border-t border-slate-200">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 px-5 py-2 rounded-lg flex items-center justify-center font-medium text-white text-sm ease duration-300 cursor-pointer"
            >
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
