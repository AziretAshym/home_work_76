export interface Message {
    id: string;
    message: string;
    author: string;
}

export type MessageWithoutId = Omit<Message, "id">;