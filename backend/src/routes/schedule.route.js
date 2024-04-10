import express from 'express';
const router = express.Router();
import getScheduleByDate from "../Controllers/getScheduleByDate.middleware.js";
import addScheduleMiddleware from '../Controllers/addSchedule.middleware.js';
import getAllSchedule from '../Controllers/getAllSchedule.middleware.js';
import updateScheduleByIdMiddleware from '../Controllers/updateSchedule.middleware.js';
import deleteScheduleByIdMiddleware from '../Controllers/deleteSchedule.middleware.js';
import addMultipleSchedulesMiddleware from '../Controllers/addMultipleSchedule.middleware.js';
import deleteMultipleSchedulesByIdMiddleware from '../Controllers/deleteMultipleSchedule.middleware.js';
import getUpcomingSchedules from '../Controllers/getUpcomingSchedule.middleware.js';
import getOngoingEvents from '../Controllers/getOngoingEvent.middleware.js';
import getByIdSchedule from '../Controllers/getByIdSchedule.middleware.js';
import imageUploadMiddleware from '../Controllers/uploadImage.middleware.js';
import authenticateJWT from '../Controllers/Auth/auth.middleware.js';

router.get('/date/:startDate', getScheduleByDate, (req, res) => {
  res.json(res.schedule);
});

router.post('/Add', authenticateJWT, addScheduleMiddleware);

router.get('/GetAll', authenticateJWT, getAllSchedule);

router.put('/UpdateById/:id', authenticateJWT, updateScheduleByIdMiddleware);

router.delete('/DeleteById/:id', authenticateJWT, deleteScheduleByIdMiddleware);

router.post('/AddMultiple', authenticateJWT, addMultipleSchedulesMiddleware);

router.delete('/DeleteMultiple', authenticateJWT, deleteMultipleSchedulesByIdMiddleware);

router.get('/UpcomingSchedules', getUpcomingSchedules);

router.get('/OnGoingEvent', getOngoingEvents);

router.get('/GetById/:id', getByIdSchedule);

router.post('/Upload', authenticateJWT, imageUploadMiddleware, (req, res) => {
  res.json({ imageUrl: req.imageUrl });
});

export default router;