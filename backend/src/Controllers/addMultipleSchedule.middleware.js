import Schedule from '../models/schedule.model.js';

const addMultipleSchedulesMiddleware = async (req, res) => {
    try {
        const schedulesData = req.body;

        for (const schedule of schedulesData) {
            const checkDate = await Schedule.findOne({ startDate: schedule.startDate });

            if (checkDate) {
                return res.status(404).json({
                    message: 'Date already exists'
                });
            }
        }

        const addMultipleSchedule = await Schedule.insertMany(schedulesData);

        res.status(200).json(addMultipleSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default addMultipleSchedulesMiddleware;