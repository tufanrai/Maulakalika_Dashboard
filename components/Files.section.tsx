"use client";
import fetchDownloadFiles from "@/app/api/download.api";
import Download_card from "@/components/cards/File_card";
import UploadCard from "@/components/cards/File_form";
import { IDownload } from "@/components/interfaces/interfaces";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const FilesSection = () => {
  const { data } = useQuery({
    queryKey: ["fetch files", "new file"],
    queryFn: fetchDownloadFiles,
  });

  useEffect(() => {
    if (Array.isArray(data?.files)) {
      console.log(data?.files);
      const count = data?.files.length;
      localStorage.setItem("DownloadLenght", count);
    } else {
      console.log("files is not an array:", data?.files);
    }
  }, [data]);

  return (
    <div className="w-full h-1/2 overflow-x-hidden overflow-y-auto bg-slate-100 px-5 py-8">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-slate-900">Files</h1>
      </div>
      <div className="w-full mt-4 p-4 bg-white rounded-md shadow shadow-lg/3 flex flex-wrap items-start justify-start gap-4">
        {data && data?.files.at(0) ? (
          data.files.map((file: IDownload, index: number) => (
            <Download_card
              key={index}
              url={file.url}
              title={file.title}
              description={file.description}
              updatedAt={file.updatedAt}
              _id={file._id}
            />
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center py-8 px-2">
            <h6 className="font-black text-lg italic text-slate-400">404</h6>
            <p className="font-regural text-sm italic text-slate-400">
              Nothing to be displayed!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilesSection;
