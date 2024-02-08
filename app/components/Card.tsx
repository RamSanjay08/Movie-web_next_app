import React from "react";
import { PiTelevisionBold } from "react-icons/pi";


type Props = {};

export default function Card({}: Props) {
  return (
    <div>
      <div className="w-[275px] h-[154px] bg-white rounded-lg"></div>
      <div className="flex gap-4 items-center text-gray-400">
        <p>2013</p>
        <div className="flex items-center gap-2">
          <PiTelevisionBold />
          <span>Tv Series</span>
        </div>
        <p>7.6</p>
      </div>
      <p>Under the Dome</p>
    </div>
  );
}
