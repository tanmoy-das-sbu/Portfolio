import express from 'express';
const router = express.Router();
import getScheduleByDate from "../middlewares/getScheduleByDate.middleware.js";

router.get('/:date', getScheduleByDate, (req, res) => {
  res.json(res.schedule);
  
});

export default router;