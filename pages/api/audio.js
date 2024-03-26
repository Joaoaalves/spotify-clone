import fs from 'fs';
import path from 'path';

export default function handler(req, res){
  const { path: filePath } = req.query;

  const fullPath = path.join(process.cwd(), 'public', 'songs', filePath);

  // Check if the file exists
  fs.access(fullPath, fs.constants.R_OK, (err) => {
    if (err) {
      res.status(404).json({ error: 'File not found' });
      return;
    }

    // Read the file and send its contents
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      
      // Set appropriate content type
      res.setHeader('Content-Type', 'audio/mpeg');
      res.send(data);
    });
  });
}
