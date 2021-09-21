const multer = require("multer");
const crypto = require("crypto");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/upload/posts");
  },
  filename: (req, file, cb) => {
    const extension = MIME_TYPES[file.mimetype];
    cb(null, crypto.randomBytes(16).toString("hex") + Date.now() + "." + extension);
  }
});

module.exports = multer({ storage: storage, limits: { fileSize: 4000000 } }).single('image');
