import fs from "fs";

const songsDirectory = "./public/songs";

export default async function handler(req, res) {
  // get track list under /public/songs directory
  const songFiles = fs.readdirSync(songsDirectory);

  // remove any non-mp3 files
  const trackList = songFiles.filter((file) => file.endsWith(".mp3"));

  res.status(200).json(trackList);
}
