"use client";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";
import Deletebuttons from "../buttons/DeleteFiles.buttons";

interface IProps {
  title: string;
  description: string;
  updatedAt: string;
  url?: string;
  _id: string;
}

const Download_card = ({ title, description, updatedAt, url, _id }: IProps) => {
  return (
    <div className="max-w-80 w-full rounded-md shadow-xl/30 cursor-pointer hover:shadow-Green ease duration-300 p-4 bg-slate-50">
      <div className="w-15 h-15 rounded-sm flex items-center justify-center bg-Green font-black text-3xl">
        <FaRegFilePdf />
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-1 px-2 py-1 mt-2">
        <h6 className="font-semibold text-lg text-stone-600">{title}</h6>
        <p className="font-regural h-10 overflow-hidden text-sm text-stone-500">
          {description}
        </p>
        <span className="font-regural text-xs text-Green/50">{updatedAt}</span>
      </div>
      <div className="w-full flex items-center justify-around pt-4 pb-6">
        <Link
          href={url ?? ""}
          className="px-5 py-2 rounded-sm font-regural text-md text-white bg-Green/90 cursor-pointer ease duration-300 hover:bg-Green"
        >
          Download
        </Link>
        <Deletebuttons id={_id} />
      </div>
    </div>
  );
};

export default Download_card;
