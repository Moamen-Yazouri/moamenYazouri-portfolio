import { ICertificate, ICertificateFormDB } from "@/@types";
import certificatesRepo from "../repositories/certificates.repo";

class CertificateService {
    async addCertificate(certificate: ICertificate): Promise<ICertificateFormDB[] | null> {
        try {
            const newData = await certificatesRepo.addCertificate(certificate);
            return newData;
        }
        catch(error) {
            console.error("Failed To add the new Certificate",error);
            return null;
        }
    }

    async getAllCertificates(){
        try {
            const certificates = await certificatesRepo.getAllCertificates();
            return certificates;
        }
        catch(error) {
            console.error("Failed to get certificates!", error);
            return null;
        }
    }
}
export default new CertificateService();