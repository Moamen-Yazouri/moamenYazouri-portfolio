import { ICertificate } from "@/@types";
import mongoose, { Schema } from "mongoose";

export interface ICertificateDocument extends ICertificate, Document {}

const certificateSchema = new Schema<ICertificateDocument>({
        title: {type: String, required: true},
        description:{type: String, required: true},
        imageUrl: {type: String, required: true},
        link: {type: String, required: false},
    }, 
    { timestamps: true }
)

const CertificateModel = mongoose.models.Certificate || mongoose.model<ICertificateDocument>("Certificate", certificateSchema);

export default CertificateModel;