"use client";
import React, { useRef, useState } from "react";
import { FaRegFilePdf, FaImage, FaTrash, FaUpload } from "react-icons/fa";

const UploadCard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragOver = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: any) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files: any) => {
    setSelectedFiles(files);
  };

  const removeFile = (index: any) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
  };

  const formatFileSize = (bytes: any) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };
  return (
    <div className="w-full p-4 flex items-center justify-center bg-white rounded-2xl border border-slate-100">
      <div
        onDragOver={() => handleDragOver}
        onDragLeave={() => handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center
          transition-all duration-300 cursor-pointer w-full
          ${
            isDragging
              ? "border-emerald-500 bg-emerald-50/50 scale-[1.02]"
              : "border-slate-300 bg-slate-50/50 hover:border-emerald-400 hover:bg-slate-100/50"
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-4">
          <div
            className={`
            p-4 rounded-full transition-colors
            ${isDragging ? "bg-emerald-100" : "bg-slate-200"}
          `}
          >
            <FaUpload
              className={`h-8 w-8 ${
                isDragging ? "text-emerald-600" : "text-slate-500"
              }`}
            />
          </div>

          <div>
            <p className="text-lg font-semibold text-slate-700">
              Drop images files here or click to browse
            </p>
            <p className="text-sm text-slate-500 mt-1">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
