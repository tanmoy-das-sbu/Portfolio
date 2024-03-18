import express from 'express';
const router = express.Router();
import getScheduleByDate from "../middlewares/getScheduleByDate.middleware.js";
import addScheduleMiddleware from '../middlewares/addSchedule.middleware.js';

router.get('/:date', getScheduleByDate, (req, res) => {
  res.json(res.schedule);
  
});

router.post('/Schedule/Add' , addScheduleMiddleware)

export default router;