import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
    cloud_name: 'neeleshks',
    api_key: '243228532791311',
    api_secret: 'l10Tf5FDFNapfC-nDh8vQMEb68w'
});

const upload = multer().single('video');

const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: 'video' },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );

        streamifier.createReadStream(buffer).pipe(uploadStream);
    });
};

const videoUploadMiddleware = async (req, res, next) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error uploading video' });
            }

            if (!req.file) {
                return res.status(400).json({ error: 'Please upload a video file' });
            }

            const result = await uploadToCloudinary(req.file.buffer);
            req.videoUrl = result.secure_url;
            next();
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Error uploading video to Cloudinary' });
    }
};

export default videoUploadMiddleware;