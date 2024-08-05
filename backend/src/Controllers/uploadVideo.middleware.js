import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import ffmpeg from 'fluent-ffmpeg';
import { PassThrough } from 'stream';

cloudinary.config({
    cloud_name: 'neeleshks',
    api_key: 243228532791311,
    api_secret: 'l10Tf5FDFNapfC-nDh8vQMEb68w'
});

const upload = multer().single('video');

const compressVideo = (buffer) => {
    return new Promise((resolve, reject) => {
        const passthroughStream = new PassThrough();
        passthroughStream.end(buffer);

        const chunks = [];
        const outputStream = new PassThrough();

        ffmpeg(passthroughStream)
            .outputOptions('-vf', 'scale=800:-1')
            .format('mp4')
            .on('error', (err) => {
                reject(err);
            })
            .on('end', () => {
                resolve(Buffer.concat(chunks));
            })
            .pipe(outputStream);

        outputStream.on('data', (chunk) => {
            chunks.push(chunk);
        });
    });
};

const streamUploadLarge = (buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_large_stream(
            { resource_type: 'video' },
            (error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );

        streamifier.createReadStream(buffer).pipe(stream);
    });
};

const videoUploadMiddleware = async (req, res, next) => {
    try {
        upload(req, res, async function (err) {
            if (err) {
                return res.status(500).json({ error: 'Error uploading video' });
            }

            if (!req.file) {
                return res.status(400).json({ error: 'Please upload a file' });
            }

            const compressedVideo = await compressVideo(req.file.buffer);
            const result = await streamUploadLarge(compressedVideo);

            req.videoUrl = result.secure_url;
            next();
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Error uploading video to Cloudinary' });
    }
};

export default videoUploadMiddleware;
