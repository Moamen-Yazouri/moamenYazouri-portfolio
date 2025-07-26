import { CertificateForPortfolio, ICertificate, ICertificateFromDB } from "@/@types";
import certificatesRepo from "../../repositories/certificates.repo";
import { formatCertificates } from "./utils";

class CertificateService {
    async addCertificate(certificate: ICertificate): Promise<ICertificateFromDB[] | null> {
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
            const formatedCerts = formatCertificates(certificates);
            return formatedCerts;
        }
        catch(error) {
            console.error("Failed to get certificates!", error);
            return null;
        }
    }
}
export default new CertificateService();