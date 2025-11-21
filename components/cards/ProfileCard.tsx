import { Loader2, Save } from "lucide-react";
import React from "react";
import { CiUser, CiMail, CiCamera } from "react-icons/ci";

const ProfileCard = () => {
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
              <div className="h-12 w-12 text-white rounded-full" />
            </div>
            <label className="absolute bottom-0 right-0 p-2 bg-white rounded-full border-2 border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <CiCamera className="h-4 w-4 text-slate-600 rounded-full" />
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">User</p>
            <p className="text-sm text-slate-500">name@example.com</p>
            <p className="text-xs text-slate-400 mt-2">
              JPG, GIF or PNG. Max size of 5MB
            </p>
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
                placeholder="Enter your full name"
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
                placeholder="Email cannot be changed"
              />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none resize-none"
              rows={3}
              placeholder="Tell us about yourself"
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              className="pl-10 outline-none px-5 py-1 font-regural text-stone-800 border rounded-md border-slate-100 bg-slate-50"
              type="tel"
              placeholder="+1 (555) 000-0000"
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
              Admin
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-slate-900">Member Since</p>
              <p className="text-xs text-slate-500 mt-1">
                Account creation date
              </p>
            </div>
            <span className="text-sm text-slate-600">November 2025</span>
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
