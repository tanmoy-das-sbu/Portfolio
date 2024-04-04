import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: false
    },
    shortDescription: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    socialTags: {
        type: [String],
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;