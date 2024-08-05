import express from 'express';
import Video from '../models/video.model.js';
const router = express.Router();
import authenticateJWT from '../Controllers/Auth/auth.middleware.js';
import videoUploadMiddleware from '../Controllers/uploadVideo.middleware.js';

router.post('/Upload', authenticateJWT, videoUploadMiddleware, (req, res) => {
    res.json({ videoUrl: req.videoUrl });
});

router.get('/GetAll', async (req, res) => {
    try {
        const data = await Video.find();
        if (data) {
            return res.status(200).json({
                data
            })
        }
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.post('/Add', authenticateJWT, async (req, res) => {
    try {
        const { title, shortDescription, videoUrl } = req.body;
        const galleryData = new Video({
            title, shortDescription, videoUrl
        });

        const data = await galleryData.save();

        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.post('/AddMultiple', authenticateJWT, async (req, res) => {
    try {
        const galleryData = req.body;

        const addMultipleGallery = await Video.insertMany(galleryData);

        res.status(200).json(addMultipleGallery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/GetById/:id', async (req, res) => {
    try {
        const data = await Video.findById({ _id: req.params.id });
        if (data) {
            return res.status(200).json({ data });
        } else {
            return res.status(404).json({ message: 'No data found' });
        }
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.put('/UpdateById/:id', authenticateJWT, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, shortDescription, videoUrl } = req.body;

        const updateGallery = await Video.findByIdAndUpdate(id, {
            title, shortDescription, videoUrl
        }, { new: true });

        if (!updateGallery) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.status(200).json(updateGallery);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.delete('/DeleteById/:id', authenticateJWT, async (req, res) => {
    try {
        const { id } = req.params;

        const deletedGallery = await Video.findByIdAndDelete(id);

        if (!deletedGallery) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.status(200).json({ message: 'Video deleted successfully' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
})

router.delete('/DeleteMultiple', authenticateJWT, async (req, res) => {
    try {
        const { ids } = req.body;

        const result = await Video.deleteMany({ _id: { $in: ids } });

        res.status(200).json({ message: `${result.deletedCount} galleries deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;