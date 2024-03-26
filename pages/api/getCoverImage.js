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

    // Check if there is a cover image in the metadata
    if (metadata.common && metadata.common.picture && metadata.common.picture.length > 0) {
      // Get the first cover image
      const coverImage = metadata.common.picture[0];

      // Set the appropriate content type for the image
      res.setHeader('Content-Type', coverImage.format);

      // Send the cover image
      res.end(coverImage.data);
    } else {
      // If no cover image is found, return a 404 response
      res.status(404).end('Cover image not found');
    }
  } catch (error) {
    // If an error occurs (e.g., file not found), return a 404 response
    console.error(error);
    res.status(404).end('Song not found');
  }
}
