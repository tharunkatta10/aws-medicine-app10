const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

// Temporary file upload
const upload = multer({ dest: 'uploads/' });

// POST /upload
router.post('/', upload.single('file'), uploadController.uploadFileToS3);

module.exports = router;
