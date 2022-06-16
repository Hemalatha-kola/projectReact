const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const {S3_REGION, S3_BUCKET, S3_BASE_URL} = process.env;

module.exports = async function(file) {
   
    const s3Client = new S3Client({ region: S3_REGION});
    
    const s3Params = {
      Bucket: S3_BUCKET,
      
      Key: `${Date.now()}-${file.originalname}`,
      // The uploaded file's binary content is held in the buffer property
      Body: file.buffer
    };
    // Send the file to s3
    await s3Client.send(new PutObjectCommand(s3Params));
    // Return the endpoint to download the file
    return `${S3_BASE_URL}${S3_BUCKET}/${s3Params.Key}`;
  }; 