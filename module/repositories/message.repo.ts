"server-only"
import { IMessage } from "@/@types";
import MessageModel from "@/DB/models/message.model";
class MessageRepo {
    async addMessage(message: IMessage) {
        const newMessage = await MessageModel.create(message);
        console.log(newMessage)
        return newMessage;
    }
}

export default new MessageRepo();