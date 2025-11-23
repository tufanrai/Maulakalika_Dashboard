"use client";
import { deleteGalleryImage } from "@/app/api/gallery.api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

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
    <button
      onClick={() => deleteImage(id)}
      disabled={isPending}
      className={`flex items-center justify-center gap-2 px-5 py-2 rounded-sm ease duration-300 ${
        isPending ? "cursor-not-allowed" : "cursor-pointer"
      } bg-red-500 hover:bg-red-600 ${customStyle} font-regural text-md text-white`}
    >
      <MdDelete />
      Delete
    </button>
  );
};

export default GallerDeleteBtn;
