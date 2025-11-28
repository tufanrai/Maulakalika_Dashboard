"use client";
import { fetchGalleryContents } from "@/app/api/gallery.api";
import Gallery_card from "@/components/cards/Image_card";
import ImageUploadForm from "@/components/cards/Image_form";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface IImg {
  file_type: string;
  public_id: string;
  url: string;
  _id: string;
}

const ImagesSection = () => {
  const { data } = useQuery({
    queryKey: ["fetch images", "new image"],
    queryFn: fetchGalleryContents,
  });

  useEffect(() => {
    if (Array.isArray(data?.files)) {
      console.log(data?.files);
      const count = data?.files.length;
      localStorage.setItem("ImageLength", count);
    } else {
      console.log("files is not an array:", data?.files);
    }
  }, [data]);

  return (
    <div className="w-full h-1/2 overflow-x-hidden overflow-y-auto bg-slate-100 px-5 py-8">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-slate-900">Images</h1>
      </div>

      <div className="w-full mt-4 p-4 bg-white rounded-md shadow shadow-lg/3 flex flex-wrap items-start justify-start gap-4">
        {data && data?.files.at(0) ? (
          data.files.map((file: IImg, index: number) => (
            <Gallery_card key={index} image={file.url} _id={file._id} />
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

export default ImagesSection;
