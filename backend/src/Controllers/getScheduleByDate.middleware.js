import Schedule from "../models/schedule.model.js";

async function getScheduleByDate(req, res, next) {
  const { startDate } = req.params;
  try {

    const queryDate = new Date(startDate);
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0);
    if (queryDate.getTime() === currentDate.getTime()) {
      const schedule = await Schedule.find({ startDate: { $eq: queryDate } });
      const ongoingEvents = await Schedule.find({
        startDate: { $lte: currentDate },
        endDate: { $gte: currentDate }
      });
      const eventArray = [...schedule, ...ongoingEvents];
      if (!eventArray) {
        return res.status(204).json({ message: 'Schedule not found' });
      }

      res.schedule = eventArray;
      next();
    } else {
      const schedule = await Schedule.find({ startDate: { $eq: queryDate } });
      if (!schedule) {
        return res.status(204).json({ message: 'Schedule not found' });
      }

      res.schedule = schedule;
      next();
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default getScheduleByDate;