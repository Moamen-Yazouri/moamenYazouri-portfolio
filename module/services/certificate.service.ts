import { CertificateForPortfolio, ICertificate, ICertificateFromDB } from "@/@types";
import certificatesRepo from "../repositories/certificates.repo";
import { formater } from "./utils/utils";


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

    async getAllCertificates(): Promise<CertificateForPortfolio[]>{
        try {
            const certificates = await certificatesRepo.getAllCertificates();
            const formatedCerts = formater<ICertificateFromDB, CertificateForPortfolio>(certificates);
            return formatedCerts;
        }
        catch(error) {
            console.error("Failed to get certificates!", error);
            return [];
        }
    }
}
export default new CertificateService();