const AWS = require('aws-sdk');
const csv = require('csvtojson');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const params = {
  Bucket: 'botiqfiles',
  Key: 'contacts.csv'
};
async function csvToJSON() {
   const stream = S3.getObject(params).createReadStream();
   const json = await csv().fromStream(stream);
   console.log(json);
};
csvToJSON();