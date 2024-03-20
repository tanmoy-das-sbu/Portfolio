import Schedule from '../models/schedule.model.js';

const addScheduleMiddleware = async (req, res) => {
    try {
        const { startDate, endDate, tasks } = req.body;
        const checkDate = await Schedule.findOne({startDate})
        if(checkDate){
            res.status(404).json({
                message : 'Date already Exist'
            })
        } else {
            const newSchedule = new Schedule({
                startDate,
                endDate,
                tasks
            });
    
            const savedSchedule = await newSchedule.save();
    
            res.status(200).json(savedSchedule);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default addScheduleMiddleware;