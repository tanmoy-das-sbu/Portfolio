import Schedule from "../models/schedule.model.js";

async function getOngoingEvents(req, res, next) {
  try {
    const currentDate = new Date();
    
    const ongoingEvents = await Schedule.find({
      startDate: { $lte: currentDate },
      endDate: { $gte: currentDate }
    });

    res.json({ ongoingEvents });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default getOngoingEvents;