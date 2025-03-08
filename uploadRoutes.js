const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadFile } = require('./uploadController');

const router = express.Router();

// Multer Storage Setup
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Upload Route
router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'upload.html')));
router.post('/', upload.single('file'), uploadFile);

module.exports = router;
