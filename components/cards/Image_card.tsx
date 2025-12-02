"use client";
import { useState } from "react";
import GallerDeleteBtn from "../buttons/DeleteImages.buttons";

interface IProps {
  image: string;
  _id: string;
}

const Gallery_card = ({ image, _id }: IProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className="max-w-[280px] max-h-[260px] relative w-full h-screen bg-slate-100 border border-slate-200 rounded-md  hover:shadow-primary flex flex-col items-start justify-center gap-2 overflow-hidden">
      <div
        style={{
          backgroundImage: `url("${image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="max-w-[280px] max-h-[260px] w-full h-screen rounded-t-md cursor-pointer ease duration-300 hover:scale-103 bg-black"
      ></div>
      <div className="w-full px-2 py-3 flex items-center justify-end">
        <GallerDeleteBtn id={_id} />
      </div>
    </div>
  );
};

export default Gallery_card;
