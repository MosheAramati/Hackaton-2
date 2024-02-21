const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const dotenv = require('dotenv')
dotenv.config()

const {s3} = require('../config/aws.s3.config.js')

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        }
    })
});

module.exports = { upload };