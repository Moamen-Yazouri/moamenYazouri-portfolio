"server-only"
import { IMessage } from "@/@types";
import MessageModel from "@/DB/models/message.model";
class MessageRepo {
    async addMessage(message: IMessage) {
        await MessageModel.create(message)
    }
}

export default new MessageRepo();