import { ICertificate, ICertificateFromDB } from "@/@types";
import CertificateModel from "@/DB/models/certificates.model";

class CertificateRepo {
    async getAllCertificates() {
        return await CertificateModel.find({}).lean<ICertificateFromDB[]>();
    }
    async addCertificate(certificateDate: ICertificate) {
        return await CertificateModel.insertOne(certificateDate);
    }
}

export default new CertificateRepo();