import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        enum: ['public', 'private'], 
        default: 'public'
    }
});

const scheduleSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        index: true
        
    },
    tasks: [taskSchema] 
},{
    versionKey: false
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;