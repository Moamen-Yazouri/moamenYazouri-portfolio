import { CertificateForPortfolio, ICertificateFromDB } from "@/@types";

export const formatCertificates = (certs: ICertificateFromDB[]) => {
    const formatedCerts: CertificateForPortfolio[] = certs.map((cert) => (
        {
            _id: cert._id,
            title: cert.title,
            description: cert.description,
            imageUrl: cert.imageUrl,
            link: cert.link ? cert.link : undefined, 
        }
    ));
    return formatedCerts;
}