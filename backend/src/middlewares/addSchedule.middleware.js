import Schedule from '../models/schedule.model.js';

const addScheduleMiddleware = async (req, res, next) => {
    try {
        const { date, tasks } = req.body;
        const checkDate = await Schedule.findOne({date})
        if(checkDate){
            res.status(404).json({
                message : 'Date already Exist'
            })
        } else {
            const newSchedule = new Schedule({
                date,
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