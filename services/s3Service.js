const fs = require('fs');
const AWS = require('aws-sdk');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// AWS Configuration
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

const s3 = new AWS.S3();

exports.uploadToS3 = (file) => {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: file.originalname,
    Body: fileStream,
    ContentType: file.mimetype
  };

  return s3.upload(params).promise(); // returns a Promise
};
