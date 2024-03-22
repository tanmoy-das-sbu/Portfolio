import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'neeleshks',
    api_key: 243228532791311,
    api_secret: 'l10Tf5FDFNapfC-nDh8vQMEb68w'
});

const upload = multer({ dest: 'uploads/' }).single('image');

const imageUploadMiddleware = async (req, res, next) => {
    try {
        await new Promise((resolve, reject) => {
            upload(req, res, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });

        if (!req.file) {
            return res.status(400).json({ error: 'Please upload a file' });
        }

        const result = await cloudinary.uploader.upload(req.file.path);

        req.imageUrl = result.secure_url;
        next();
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
};

export default imageUploadMiddleware;