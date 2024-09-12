// middleware/upload.js
import multer from 'multer';

const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'), false);
    }
  },
});

export default upload;
