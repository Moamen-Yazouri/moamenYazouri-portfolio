import { IMessage } from "@/@types";
import { connection } from "@/DB/connection";
import messageRepo from "../repositories/message.repo";


class MessageService {
    async addMessage(message: IMessage) {
        await connection();
        try {
            const newMessage = await messageRepo.addMessage(message);
            const formated: IMessage = {
                name: newMessage.name,
                email: newMessage.email,
                message: newMessage.message,
            }
            return formated;
        }
        catch(e) {
            console.error("Something went wrong", e);
            return null;
        }
    }
}
export default new MessageService();