import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import sharp from 'sharp';

cloudinary.config({
    cloud_name: 'neeleshks',
    api_key: 243228532791311,
    api_secret: 'l10Tf5FDFNapfC-nDh8vQMEb68w'
});

const upload = multer().single('image');

const imageUploadMiddleware = async (req, res, next) => {
    try {
        upload(req, res, async function (err) {
            if (err) {
                return res.status(500).json({ error: 'Error uploading image' });
            }

            if (!req.file) {
                return res.status(400).json({ error: 'Please upload a file' });
            }

            const compressedImage = await sharp(req.file.buffer)
                .resize({ fit: 'inside', width: 800, height: 800 })
                .toBuffer();

            const streamUpload = (buffer) => {
                return new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream((error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    });

                    streamifier.createReadStream(buffer).pipe(stream);
                });
            };

            const result = await streamUpload(compressedImage);

            req.imageUrl = result.secure_url;
            next();
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
};

export default imageUploadMiddleware;