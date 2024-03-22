import Schedule from '../models/schedule.model.js';

const addMultipleSchedulesMiddleware = async (req, res) => {
    try {
        const schedulesData = req.body;

        const addMultipleSchedule = await Schedule.insertMany(schedulesData);

        res.status(200).json(addMultipleSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default addMultipleSchedulesMiddleware;