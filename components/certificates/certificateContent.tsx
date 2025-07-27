import React from 'react'
import CertificatesSection from './components/certificatesSection'
import certificateService from '@/module/services/certificate.service'

const CertificateContent = async() => {
  const certificates = await certificateService.getAllCertificates();
  return (
    <CertificatesSection certificates={certificates}/>
  )
}

export default CertificateContent