import Schedule from "../models/schedule.model.js";

async function getScheduleByDate(req, res, next) {
  const { startDate } = req.params;
  try {

    const queryDate = new Date(startDate);

    const schedule = await Schedule.findOne({ startDate: { $eq: queryDate } });

    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.schedule = schedule;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default getScheduleByDate;