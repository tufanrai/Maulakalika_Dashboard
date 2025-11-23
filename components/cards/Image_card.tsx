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
    <div className="max-w-[280px] max-h-[260px] relative w-full h-screen bg-slate-400 rounded-md ease duration-300 hover:scale-103 hover:shadow-primary">
      <GallerDeleteBtn id={_id} customStyle="absolute top-5 right-6" />
      <div
        style={{
          backgroundImage: `url("${image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="max-w-[280px] max-h-[260px] w-full h-screen rounded-md shadow-xl/30 shadow-stone-800 cursor-pointer"
      ></div>
    </div>
  );
};

export default Gallery_card;
