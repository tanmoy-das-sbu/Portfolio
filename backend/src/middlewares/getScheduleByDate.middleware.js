import Schedule from "../models/schedule.model.js";

async function getScheduleByDate(req, res, next) {
  const { date } = req.params; 
  try {

    const queryDate = new Date(date);

    const schedule = await Schedule.findOne({ date: { $eq: queryDate } }); 

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