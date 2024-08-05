import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: false
    },
    videoUrl: {
        type: String,
        required: true
    }
});

const video = mongoose.model('video', videoSchema);

export default video;