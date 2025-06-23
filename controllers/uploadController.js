const fs = require('fs');
const path = require('path');
const s3Service = require('../services/s3Service');

exports.uploadFileToS3 = async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).send("No file uploaded");

  try {
    const result = await s3Service.uploadToS3(file);
    fs.unlinkSync(file.path); // delete local file
    res.status(200).send(`✅ File uploaded to: ${result.Location}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("❌ Upload failed");
  }
};
