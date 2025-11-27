"use client";
import QuickLinkCard from "@/components/cards/QuickLinkCard";
import StatsCard from "@/components/cards/ServiceCard";
import React from "react";
import { FaRegFilePdf, FaImage, FaUpload } from "react-icons/fa";
import { useRouter } from "next/navigation";
import FilesSection from "@/components/Files.section";
import ImagesSection from "@/components/Images.section";

interface IProps {
  name: string;
  lengthImage: string;
  lengthDownload: string;
}
export default function Home() {
  // fetched the total length of say the total images and files.
  const [datas, setDatas] = React.useState<null | IProps>(null);

  const router = useRouter();

  React.useEffect(() => {
    if (typeof window != "undefined") {
      const name = JSON.parse(localStorage.getItem("user")!).admin.name ?? "";
      const images = localStorage.getItem("ImageLength")!;
      const pdfs = localStorage.getItem("DownloadLenght")!;

      if (name == null) {
        router.replace("/auth/login");
      }
      setDatas({
        name,
        lengthImage: images,
        lengthDownload: pdfs,
      });
    }
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden p-10 overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back {datas?.name}!
        </h1>
        <p className="text-slate-600 mt-2">
          Here's what's happening with your files today.
        </p>
      </div>

      {/* Stats */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <StatsCard
          title="Total Files"
          value={datas?.lengthDownload}
          trend="0 Added today"
          color="emerald"
          icon={FaRegFilePdf}
        />
        <StatsCard
          title="Total Images"
          value={datas?.lengthImage}
          trend="0 Added today"
          color="blue"
          icon={FaImage}
        />
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
          <h2 className="text-xl font-bold text-slate-900">Uploaded files</h2>
        </div>
        <FilesSection />
        <ImagesSection />
      </div>
    </div>
  );
}
