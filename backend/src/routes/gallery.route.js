import express from 'express';
import Gallery from '../models/gallery.model.js';
import imageUploadMiddleware from '../Controllers/uploadImage.middleware.js';
const router = express.Router();

router.post('/Upload', imageUploadMiddleware, (req, res) => {
    res.json({ imageUrl: req.imageUrl });
});

router.get('/GetAll', async (req, res) => {
    try {
        const data = await Gallery.find();
        if (data) {
            return res.status(200).json({
                data
            })
        }
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.post('/Add', async (req, res) => {
    try {
        const { title, altText, shortDescription, date, socialTags, imageUrl } = req.body;
        const galleryData = new Gallery({
            title, altText, shortDescription, date, socialTags, imageUrl
        });

        const data = await galleryData.save();

        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.post('/AddMultiple', async (req, res) => {
    try {
        const galleryData = req.body;

        const addMultipleGallery = await Gallery.insertMany(galleryData);

        res.status(200).json(addMultipleGallery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/GetById/:id', async (req, res) => {
    try {
        const data = await Gallery.findById({ _id: req.params.id });
        if (data) {
            return res.status(200).json({ data });
        } else {
            return res.status(404).json({ message: 'No data found' });
        }
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.put('/UpdateById/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, altText, shortDescription, date, socialTags, imageUrl } = req.body;

        const updateGallery = await Gallery.findByIdAndUpdate(id, {
            title, altText, shortDescription, date, socialTags, imageUrl
        }, { new: true });

        if (!updateGallery) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json(updateGallery);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.delete('/DeleteById/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedGallery = await Gallery.findByIdAndDelete(id);

        if (!deletedGallery) {
            return res.status(404).json({ message: 'Gallery not found' });
        }

        res.status(200).json({ message: 'Gallery deleted successfully' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
})

router.delete('/DeleteMultiple', async (req, res) => {
    try {
        const { ids } = req.body;

        const result = await Gallery.deleteMany({ _id: { $in: ids } });

        res.status(200).json({ message: `${result.deletedCount} galleries deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;