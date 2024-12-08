import { promises as fs } from 'fs';
import {Message, MessageWithoutId} from "./types";
import crypto from 'crypto';


const fileName = "db.json";
let data: Message[] = [];

const fileDb = {
    async init() {
        try {
            await fs.access(fileName);
        } catch {
            await fs.writeFile(fileName, JSON.stringify([]));
        }

        try {
            const fileContent = await fs.readFile(fileName);
            data = JSON.parse(fileContent.toString());
        } catch (e) {
            console.error(e);
        }
    },
    async addMessage(msg: MessageWithoutId) {
        const id = crypto.randomUUID();
        const date = new Date().toISOString();
        const message = {id, ...msg, date};
        data.push(message);
        await fs.writeFile(fileName, JSON.stringify(data));
        await this.save;
        return message;
    },
    async getMessages() {
        return data;
    },
    async save() {
        return fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;