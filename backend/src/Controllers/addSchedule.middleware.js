import Schedule from '../models/schedule.model.js';

const addScheduleMiddleware = async (req, res) => {
    try {
        const { startDate, endDate, startTime, endTime, priority, heading, shortDescription, location, imageUrl, visibility, tasks } = req.body;

        const newSchedule = new Schedule({
            startDate, endDate, startTime, endTime, priority,
            heading, shortDescription, location, imageUrl,
            visibility, tasks
        });

        const savedSchedule = await newSchedule.save();

        res.status(200).json(savedSchedule);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default addScheduleMiddleware;