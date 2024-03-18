import Schedule from '../models/schedule.model.js';

const deleteScheduleByIdMiddleware = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedSchedule = await Schedule.findByIdAndDelete(id);

        if (!deletedSchedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }

        res.status(200).json({ message: 'Schedule deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default deleteScheduleByIdMiddleware;