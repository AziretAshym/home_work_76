import express from "express";
import {Message, MessageWithoutId} from "../types";
import fileDb from "../fileDb";
const messagesRouter = express.Router();

messagesRouter.post('/', async (req, res) => {
    const message: MessageWithoutId = {
        message: req.body.message,
        author: req.body.author,
    }

    if (!message.message || !message.author) {
        res.status(400).send("One of the fields (author or message) is not filled in");
    }

    const savedMessage: Message = await fileDb.addMessage(message);
    res.send(savedMessage);
});

messagesRouter.get('/', async (req, res) => {
    const queryDate = req.query.datetime as string;

    if (queryDate) {
        const date = new Date(queryDate);

        if (isNaN(date.getDate())) {
            res.status(400).send("Invalid datetime.");
        }

        try {
            const allMessages = await fileDb.getMessages();
            const messagesAfterThisDate = allMessages.filter(
                (msg) => new Date(msg.datetime) > date
            );

            res.send(messagesAfterThisDate);
        } catch (e) {
            console.error(e);
        }
    }

    try {
        const messages = await fileDb.getMessages();
        res.send(messages);
    } catch (e) {
        console.error(e);
    }
});

export default messagesRouter;
