"use client";
import { deleteGalleryImage } from "@/app/api/gallery.api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";

interface IProps {
  customStyle?: string;
  id: string;
}

const GallerDeleteBtn = ({ customStyle, id }: IProps) => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteGalleryImage,
    mutationKey: ["delete the gallery image"],
    onSuccess: (data) => {
      toast.success(data.message);
      router.replace("/images");
    },
    onError: (err) => {
      toast.error(err.message);
      router.replace("/");
    },
  });

  const deleteImage = async (id: string) => {
    mutate(id);
  };

  return (
    <Popover
      showArrow
      backdrop="opaque"
      classNames={{
        base: [
          // arrow color
          "before:bg-slate-800",
        ],
        content: [
          "max-w-100 w-full rounded-lg bg-white p-0 pb-2 border-1 border-red-200 shadow-lg/30",
        ],
      }}
      placement="top"
    >
      <PopoverTrigger>
        <button
          className={`flex items-center justify-center gap-2 px-5 py-2 rounded-sm ease duration-300 ${
            isPending ? "cursor-not-allowed" : "cursor-pointer"
          } bg-red-500 hover:bg-red-600 ${customStyle} font-regural text-md text-white`}
        >
          Delete
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col items-start justify-center gap-2 rounded-md overflow-hidden bg-slate-100">
          <h5 className="w-full font-bold text-lg text-slate-700 bg-red-100 text-start px-2 py-3 italic">
            Are you sure?
          </h5>
          <p className="w-full font-regural text-sm text-slate-600 text-start px-2 py-2 mb-2">
            Are you sure that you want to remove this file? If you delete the
            file then it won't be displayed on your site.
          </p>
          <div className="w-full px-2">
            <p className="w-full pl-5 py-2 bg-red-50 font-regural text-xs text-red-400 italic border border-red-200 rounded-sm">
              Click anywhere to close the confirmation popover.
            </p>
          </div>
          <div className="w-full flex items-center justify-center gap-2 px-2">
            {isPending ? (
              <button
                onClick={() => deleteImage(id)}
                disabled={isPending}
                className={`w-full flex items-center justify-center gap-2 px-5 py-2 rounded-sm ease duration-300 ${
                  isPending ? "cursor-not-allowed" : "cursor-pointer"
                } bg-red-400 hover:bg-red-300 border-1 border-red-300 ${customStyle} font-regural text-md text-white`}
              >
                <AiOutlineLoading className="animate-spin" />
                Pending
              </button>
            ) : (
              <button
                onClick={() => deleteImage(id)}
                disabled={isPending}
                className={`w-full flex items-center justify-center gap-2 px-5 py-2 rounded-sm ease duration-300 ${
                  isPending ? "cursor-not-allowed" : "cursor-pointer"
                } bg-red-400 hover:bg-red-300 border-1 border-red-300 ${customStyle} font-regural text-md text-white`}
              >
                <MdDelete />
                Delete
              </button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GallerDeleteBtn;
