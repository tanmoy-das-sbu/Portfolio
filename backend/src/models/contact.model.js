import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    mobile: {
        type: Number,
        required: false
    },
    message: {
        type: String,
        required: false
    }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;