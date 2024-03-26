import { promises as fs } from 'fs';
import path from 'path';
import mm from 'music-metadata';

export default async function handler(req, res) {
  const { songName } = req.query;

  const songPath = path.join(process.cwd(), 'public', 'songs', `${songName}`);

  try {
    // Read the MP3 file
    const fileData = await fs.readFile(songPath);

    // Parse the metadata of the MP3 file
    const metadata = await mm.parseBuffer(fileData, 'audio/mpeg');

    // Extract artist name and track name from the metadata
    const artist = metadata.common.artist || 'Unknown Artist';
    const trackName = metadata.common.title || 'Unknown Track';

    // Send the track metadata in the response
    res.status(200).json({ artist, trackName });
  } catch (error) {
    // If an error occurs (e.g., file not found), return a 404 response
    console.error(error);
    res.status(404).json({ error: 'Song not found' });
  }
}
