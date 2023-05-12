import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Song = ({ img, songName, artists }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-full ml-2 flex items-center justify-items-start gap-6">
      <img src={img} />
      <div className="flex flex-col justify-items-start">
        <a className="font-medium text-white" href="#">
          {songName}
        </a>
        <a className="text-sm text-gray-400" href="#">
          {artists}
        </a>
      </div>
      {liked ? (
        <AiFillHeart
          className="w-6 h-6 text-green-400 cursor-pointer"
          onClick={handleLike}
        />
      ) : (
        <AiOutlineHeart className="w-6 h-6 text-gray-400 cursor-pointer" onClick={handleLike} />
      )}
    </div>
  );
};

export default Song;
