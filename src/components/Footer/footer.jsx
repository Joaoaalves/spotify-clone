import React from "react";
import Song from "./song";
import Player from "./player";
import MusicUtils from "./musicUtils";
const Footer = () => {
  return (
    <footer className="h-[10%] flex place-content-between p-2 items-center">
        <Song img='song-cover.jpg' songName={'Need To Fell Loved - Cristoph Remix'} artists={'Reflekt, Cristoph, delline bass'}/>
        <Player />
        <MusicUtils />
    </footer>
  );
};

export default Footer;
