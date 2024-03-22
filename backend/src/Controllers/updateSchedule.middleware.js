import Schedule from '../models/schedule.model.js';

const updateScheduleByIdMiddleware = async (req, res) => {
    try {
        const { id } = req.params;
        const { startDate, endDate, startTime, endTime, priority, heading, shortDescription, location, imageUrl, visibility, tasks } = req.body;

        const updatedSchedule = await Schedule.findByIdAndUpdate(id, {
            startDate, endDate, startTime, endTime, priority,
            heading, shortDescription, location, imageUrl,
            visibility, tasks
        }, { new: true });

        if (!updatedSchedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }

        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default updateScheduleByIdMiddleware;