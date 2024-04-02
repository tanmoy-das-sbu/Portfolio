import mongoose from 'mongoose';

const subscribersSchema = new mongoose.Schema({
    email: { type: String, required: true }
})

const Subscribers = mongoose.model("Subscribers", subscribersSchema);

export default Subscribers;