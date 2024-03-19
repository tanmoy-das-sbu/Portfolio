import Schedule from '../models/schedule.model.js';

const getAllSchedule = async (req, res) => {
    try {
        const data = await Schedule.find().sort({date : 1});
        res.status(200).json({
            message: 'success',
            data
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getAllSchedule;