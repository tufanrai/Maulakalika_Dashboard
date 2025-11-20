import ProfileCard from "@/components/cards/ProfileCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto flex flex-col items-start justify-center overflow-hidden pb-8 px-20">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-2">
          Manage your account settings and preferences
        </p>
      </div>
      <ProfileCard />
    </div>
  );
}
