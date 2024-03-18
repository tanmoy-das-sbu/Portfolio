import Schedule from '../models/schedule.model.js';

const addScheduleMiddleware = async (req, res, next) => {
    try {
        const { date, tasks } = req.body;
        const newSchedule = new Schedule({
            date,
            tasks
        });

        const savedSchedule = await newSchedule.save();

        res.status(201).json(savedSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default addScheduleMiddleware;