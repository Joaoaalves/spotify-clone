import React from "react";
import {BsDot} from 'react-icons/bs'

const Playlist = ({img, name, type, info}) => {
  return (
    <div className="flex p-2 gap-3 hover:bg-neutral-800 rounded cursor-pointer">
      <img src={img} className="w-12 rounded"></img>
      <div className="flex flex-col justify-items-start">
        <a className="font-medium text-white" href="#">
          {name}
        </a>
        <div className="flex justify-center items-center">
          <a className="text-sm text-gray-400" href="#">
            {type}
          </a>
          <BsDot className="w-4 h-4" />
          <a className="text-sm text-gray-400" href="#">
            {info}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
