import Subscribers from "../../models/newsletters.model.js";


export const addSubscribersEmail = async (req, res) => {
    try {
        const {email} = req.body;

        const newEmail = await Subscribers.create({
            email
        })
        res.status(201).json({ message: "Email added successfully", newEmail });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllSubscribers = async (req, res) => {
    try {
        const allsubscribersEmail = await Subscribers.find();
        res.status(200).json({
            message: 'success',
            allsubscribersEmail
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getSubscribersById = async (req, res) => {
    try {
        const {id} = req.params;
        const subscribersEmail = await Subscribers.findOne({_id:id});
        res.status(200).json({
            message: 'success',
            subscribersEmail
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getSubscribersByEmail = async (req, res) => {
    try {
        const {email} = req.body;
        const subscribersEmail = await Subscribers.findOne({email:email});
        res.status(200).json({
            message: 'success',
            subscribersEmail
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateSubscribersById = async (req, res) => {
    try {
        const {id, newEmail} = req.body;
        const subscribersEmail = await Subscribers.updateOne({_id:id},{
            email: newEmail
        });
        res.status(200).json({
            message: 'success',
            subscribersEmail
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteSubscribersByEmail = async (req, res) => {
    try {
        const {email} = req.body;
        const subscribersEmail = await Subscribers.deleteOne({email:email});
        res.status(200).json({
            message: 'success',
            subscribersEmail
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}