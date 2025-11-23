"use client";
import { deleteDownloadFile } from "@/app/api/gallery.api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

interface IProps {
  customStyle?: string;
  id: string;
}

const Deletebuttons = ({ customStyle, id }: IProps) => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteDownloadFile,
    mutationKey: ["delete the pdf file"],
    onSuccess: (data) => {
      toast.success(data.message);
      router.replace("/files");
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

export default Deletebuttons;
