"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ETypes, IUpload } from "../interfaces/interfaces";
import { UploadSchema } from "../schema/FormSchema";
import { useMutation } from "@tanstack/react-query";
import { uploadDownloadFiles, uploadGalleryImage } from "@/app/api/gallery.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function FileUploadForm() {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: uploadDownloadFiles,
    mutationKey: ["new File"],
    onSuccess: (data) => {
      toast.success(data?.message);
      router.replace("/files");
      reset();
    },
  });
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UploadSchema),
  });

  const [dragActive, setDragActive] = useState(false);
  const [previewName, setPreviewName] = useState("");

  const logFile = (data: IUpload) => {
    mutate(data);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setValue("file", file, { shouldValidate: true });
      setPreviewName(file.name);
    }
  };

  const handleFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("file", file, { shouldValidate: true });
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
          {...register("file")}
          onChange={handleFilePick}
        />
      </div>

      {previewName && (
        <p className="text-sm text-gray-700">Selected: {previewName}</p>
      )}

      {errors.file && (
        <p className="text-red-600 text-sm">{errors.file.message}</p>
      )}

      <div className="w-full flex items-center justify-around gap-2">
        <div className=" flex flex-col items-start justify-center">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Title
          </label>
          <input
            className="bg-white outline-none px-5 py-1 font-regural text-md text-stone-800 rounded-md border-[1px] border-stone-300"
            type="text"
            placeholder="Kalika hydro power"
            {...register("title")}
          />
        </div>

        <div className="flex flex-col items-start justify-center">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            File type
          </label>
          <select
            className="bg-white outline-none px-5 py-1 font-regural text-md text-stone-800 rounded-md border-[1px] border-stone-300"
            {...register("type")}
          >
            <option value={ETypes.downloads}>{ETypes.downloads}</option>
            <option value={ETypes.events}>{ETypes.events}</option>
            <option value={ETypes.news}>{ETypes.news}</option>
          </select>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-center">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Description
        </label>
        <input
          className="bg-white outline-none px-5 py-1 font-regural text-md text-stone-800 w-full rounded-md border-[1px] border-stone-300"
          type="text"
          placeholder="This project..."
          {...register("description")}
        />
      </div>

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
