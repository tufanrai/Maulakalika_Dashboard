"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { IImage, IUpload } from "../interfaces/interfaces";
import { ImageUploadSchema } from "../schema/FormSchema";
import { useMutation } from "@tanstack/react-query";
import { uploadGalleryImage } from "@/app/api/gallery.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ImageUploadForm() {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: uploadGalleryImage,
    mutationKey: ["new image"],
    onSuccess: (data) => {
      toast.success(data?.message);
      router.refresh();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ImageUploadSchema),
  });

  const [dragActive, setDragActive] = useState(false);
  const [previewName, setPreviewName] = useState("");

  const logFile = (data: IImage) => {
    mutate(data);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      setPreviewName(file.name);
    }
  };

  const handleFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      setPreviewName(file.name);
    }
  };

  return (
    <form onSubmit={handleSubmit(logFile)} className="space-y-4">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
        className={`w-full p-8 border-2 border-dashed rounded-md text-center cursor-pointer
          ${dragActive ? "border-blue-500 bg-blue-50" : "border-slate-300"}`}
      >
        <p className="text-gray-600">
          Drag & drop your file here or click to upload
        </p>

        <input
          id="fileInput"
          type="file"
          className="hidden"
          {...register("image")}
          onChange={handleFilePick}
        />
      </div>

      {previewName && (
        <p className="text-sm text-gray-700">Selected: {previewName}</p>
      )}

      {errors.image && (
        <p className="text-red-600 text-sm">{errors.image.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={`px-4 py-2 bg-blue-600 text-white rounded-md ${
          isPending ? "cursor-not-allowed" : "cursor-pointer"
        } ease duration-300 hover:bg-blue-700`}
      >
        Submit
      </button>
    </form>
  );
}
