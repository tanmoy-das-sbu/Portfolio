import Schedule from '../models/schedule.model.js';

const getByIdSchedule = async (req, res) => {
    try {
        const data = await Schedule.findById({ _id: req.params.id });
        if (data) {
            res.status(200).json({
                message: 'success',
                data
            });
        } else {
            res.status(500).json({
                message: 'no data present'
            });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getByIdSchedule;