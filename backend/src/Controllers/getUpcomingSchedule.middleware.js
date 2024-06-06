import Schedule from "../models/schedule.model.js";

async function getUpcomingSchedules(req, res, next) {
  try {
    const currentDate = new Date();

    const upcomingSchedules = await Schedule.find({ startDate: { $gte: currentDate } });

    if (upcomingSchedules.length === 0) {
      return res.status(204).json({ message: 'No upcoming schedules found' });
    }

    res.json(upcomingSchedules);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default getUpcomingSchedules;
