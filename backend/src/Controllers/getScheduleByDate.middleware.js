import Schedule from "../models/schedule.model.js";

async function getScheduleByDate(req, res, next) {
  const { startDate } = req.params;
  try {
    const queryDate = new Date(startDate);
    const queryDateOnly = new Date(queryDate.getFullYear(), queryDate.getMonth(), queryDate.getDate());

    const currentDate = new Date();
    const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    if (queryDateOnly.getTime() === currentDateOnly.getTime()) {
      const schedule = await Schedule.find({ startDate: { $gte: currentDateOnly, $lt: new Date(currentDateOnly.getTime() + 86400000) } });
      if (!schedule || schedule.length === 0) {
        return res.status(204).json({ message: 'Schedule not found for the current date' });
      }

      res.schedule = schedule;
      next();
    } else {
      return res.status(204).json({ message: 'Schedule not found for the current date' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default getScheduleByDate;