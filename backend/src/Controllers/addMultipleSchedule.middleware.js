import Schedule from '../models/schedule.model.js';

const addMultipleSchedulesMiddleware = async (req, res) => {
    try {
        const schedulesData = req.body;

        const checkDate = await Schedule.find({startDate});

        if(checkDate){
            res.status(404).json({
                message : 'Date already Exist'
            }) 
        } else {
            const addMultipleSchedule = await Schedule.insertMany(schedulesData);

            res.status(200).json(addMultipleSchedule);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default addMultipleSchedulesMiddleware;