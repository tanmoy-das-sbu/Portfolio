import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: false
    },
    startTime: {
        type: String,
        required: false
    },
    endTime: {
        type: String,
        required: false
    },
    shortDescription: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    priority: {
        type: Number,
        required: false
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public'
    }
});

const scheduleSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: false,
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    priority: {
        type: Boolean,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    visibility: {
        type: Boolean,
        required: false,
        default: true,
    },
    scheduleVisibility: {
        type: Boolean,
        required: false,
        default: true,
    },
    scheduleDate: {
        type: Date,
        required: false
    },
    scheduleTime: {
        type: String,
        required: false
    },
    eventType: {
        type: String,
        required: false
    },
    tasks: [taskSchema]
}, {
    versionKey: false
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;