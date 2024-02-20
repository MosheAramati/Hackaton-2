import express from 'express';
import { upload } from '../utils/upload.util';
import { uploadPhoto } from '../controllers/photos.controllers';

const router = express.Router()

router.post('/upload', upload.array('images'), uploadPhoto)
