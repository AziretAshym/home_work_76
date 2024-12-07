import express from "express";
import {Message, MessageWithoutId} from "../types";
import fileDb from "../fileDb";
const messagesRouter = express.Router();

messagesRouter.post('/', async (req, res) => {
    const message: MessageWithoutId = {
        message: req.body.message,
        author: req.body.author,
    }
    const savedMessage: Message = await fileDb.addMessage(message);
    res.send(savedMessage);
});

messagesRouter.get('/', async (_req, res) => {
    const messages = await fileDb.getMessages();
    res.send(messages);
});

export default messagesRouter;