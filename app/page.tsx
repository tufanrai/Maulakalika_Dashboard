import StatsCard from "@/components/cards/ServiceCard";
import Image from "next/image";
import { FaRegFilePdf, FaImage, FaTrash } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back Tufan Rai!
        </h1>
        <p className="text-slate-600 mt-2">
          Here's what's happening with your files today.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <StatsCard
          title="Total Files"
          value="0"
          trend="0 Added today"
          color="emerald"
          icon={FaRegFilePdf}
        />
        <StatsCard
          title="Total Images"
          value="0"
          trend="0 Added today"
          color="blue"
          icon={FaImage}
        />
        <StatsCard
          title="Storage userd"
          value="0.0 KB"
          color="purple"
          icon={FiTrendingUp}
        />
        <StatsCard title="In Trash" value="0" color="amber" icon={FaTrash} />
      </div>
    </div>
  );
}
