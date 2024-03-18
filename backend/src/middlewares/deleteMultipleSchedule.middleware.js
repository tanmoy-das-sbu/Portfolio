import Schedule from '../models/schedule.model.js';

const deleteMultipleSchedulesByIdMiddleware = async (req, res) => {
    try {
        const { ids } = req.body;

        const result = await Schedule.deleteMany({ _id: { $in: ids } });

        res.status(200).json({ message: `${result.deletedCount} schedules deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default deleteMultipleSchedulesByIdMiddleware;