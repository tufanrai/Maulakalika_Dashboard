import QuickLinkCard from "@/components/cards/QuickLinkCard";
import StatsCard from "@/components/cards/ServiceCard";
import { FaRegFilePdf, FaImage, FaTrash, FaUpload } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden p-10 overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back Tufan Rai!
        </h1>
        <p className="text-slate-600 mt-2">
          Here's what's happening with your files today.
        </p>
      </div>

      {/* Stats */}
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

      {/* Quick Links */}
      <div className="w-full flex items-center justify-start gap-4 py-12 border-1 border-slate-50">
        <QuickLinkCard
          title="Upload Image"
          description="Drag and drop or browse to upload new images"
          icon={<FaImage className="h-12 w-12 mb-4 opacity-90" />}
          link="/images"
          color="emerald"
        />
        <QuickLinkCard
          title="Upload Files"
          description="Upload documents, spreadsheets and many more"
          icon={<FaRegFilePdf className="h-12 w-12 mb-4 opacity-90" />}
          link="/images"
          color="blue"
        />
      </div>

      {/* Recent Uploads */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Recent Uploads</h2>
          <button className="px-4 py-1 rounded-sm flex items-center justify-center font-semibold text-md text-stone-800 ease duration-300 hover:bg-slate-200 cursor-pointer">
            View All
          </button>
        </div>

        <div className="text-center py-12">
          <FaUpload className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">
            No uploads yet. Start by uploading some files!
          </p>
        </div>
      </div>
    </div>
  );
}
