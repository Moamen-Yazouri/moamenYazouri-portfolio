import { IMessage } from "@/@types";
import mongoose, { Schema } from "mongoose";

export interface IMessageDocument extends IMessage, Document { };

const messageSchema = new Schema<IMessageDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true
});

const MessageModel = mongoose.models.Message || mongoose.model<IMessageDocument>("Message", messageSchema);

export default MessageModel;
