import express from 'express';
const router = express.Router();
import {
    addSubscribersEmail, 
    getAllSubscribers, 
    getSubscribersById, 
    getSubscribersByEmail, 
    updateSubscribersById,
    deleteSubscribersByEmail
} from '../Controllers/SubscribeNewsLettersController/newsletter.controller.js'

router.post('/Add', addSubscribersEmail);

router.get('/GetAll', getAllSubscribers);

router.get('/GetById/:id', getSubscribersById);

router.get('/GetByEmail', getSubscribersByEmail);

router.put('/UpdateByEmail', updateSubscribersById);

router.delete('/DeleteByEmail', deleteSubscribersByEmail);


export default router;