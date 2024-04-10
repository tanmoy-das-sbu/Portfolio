import { translate } from '@vitalets/google-translate-api';
import express from 'express';

const router = express.Router();

router.post('/translate', async (req, res) => {
    try {
        const { text, source_language, target_language } = req.body;
        

        if (!text || !target_language) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        let translation;
        if (source_language) {
            translation = await translate(text, { from: source_language, to: target_language });
        } else {
            translation = await translate(text, { to: target_language });
        }

        res.json({ translated_text: translation.text });
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
