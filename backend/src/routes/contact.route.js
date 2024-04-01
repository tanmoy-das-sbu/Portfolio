import express from 'express';
import Contact from '../models/contact.model.js';
const router = express.Router();

router.get('/GetAll', async (req, res) => {
    try {
        const data = await Contact.find();
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
        const { name, subject, email, mobile, message } = req.body;
        const contactData = new Contact({
            name, subject, email, mobile, message
        });

        const data = await contactData.save();

        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.get('/GetById/:id', async (req, res) => {
    try {
        const data = await Contact.findById({ _id: req.params.id });
        if (data) {
            return res.status(200).json({ data });
        } else {
            return res.status(404);
        }
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.put('/UpdateById/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, subject, email, mobile, message } = req.body;

        const updateContact = await Contact.findByIdAndUpdate(id, {
            name, subject, email, mobile, message
        }, { new: true });

        if (!updateContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json(updateContact);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

router.delete('/DeleteById/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
})

export default router;