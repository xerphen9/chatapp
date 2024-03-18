const MessageModel = require('../models/messageModel')

const addMessage = async (req, res) => {
    try {
        const { from, to, message} = req.body

        const data = await MessageModel.create({
            message: {
                text: message
            },
            users: [from, to],
            sender: from,
        })
        if(data) return res.status(201).json({msg: 'Message created successfully', data})
        return res.json({msg: 'Message not created successfully'})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
} 

const allMessage = async (req, res) => {
    try {
        const data = await MessageModel.find({}).sort({createdAt: -1})
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = { addMessage, allMessage }