import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IProps {
  link: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const QuickLinkCard = ({ link, icon, title, description, color }: IProps) => {
  return (
    <div className="w-full">
      <Link href={link}>
        <div
          className={`w-full bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
        >
          {icon}
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-emerald-100">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default QuickLinkCard;
