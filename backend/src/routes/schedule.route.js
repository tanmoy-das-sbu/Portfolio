import express from 'express';
const router = express.Router();
import getScheduleByDate from "../Controllers/getScheduleByDate.middleware.js";
import addScheduleMiddleware from '../Controllers/addSchedule.middleware.js';
import getAllSchedule from '../Controllers/getAllSchedule.middleware.js';
import updateScheduleByIdMiddleware from '../Controllers/updateSchedule.middleware.js';
import deleteScheduleByIdMiddleware from '../Controllers/deleteSchedule.middleware.js';
import addMultipleSchedulesMiddleware from '../Controllers/addMultipleSchedule.middleware.js';
import deleteMultipleSchedulesByIdMiddleware from '../Controllers/deleteMultipleSchedule.middleware.js';

router.get('/Schedule/date/:date', getScheduleByDate, (req, res) => {
  res.json(res.schedule);
});

router.post('/Schedule/Add', addScheduleMiddleware);

router.get('/Schedule/GetAll', getAllSchedule);

router.put('/Schedule/UpdateById/:id', updateScheduleByIdMiddleware);

router.delete('/Schedule/DeleteById/:id', deleteScheduleByIdMiddleware);

router.post('/Schedule/AddMultiple', addMultipleSchedulesMiddleware);

router.delete('/Schedule/DeleteMultiple', deleteMultipleSchedulesByIdMiddleware);

export default router;