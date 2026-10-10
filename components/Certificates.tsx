import Image from "next/image";
import styles from "./Certificates.module.css";

export interface CertificateData {
  id: string;
  title: string;
  organization: string;
  year?: string;
  imageUrl: string;
  description?: string;
}

interface CertificatesProps {
  certificates: CertificateData[];
  columns?: 2 | 3 | 4;
}

export default function Certificates({ 
  certificates, 
  columns = 3 
}: CertificatesProps) {
  return (
    <div className={styles.certificates}>
      <div 
        className={`${styles.grid} ${
          columns === 2 ? styles.gridCols2 : 
          columns === 4 ? styles.gridCols4 : 
          styles.gridCols3
        }`}
      >
        {certificates.map((cert) => (
          <div key={cert.id} className={styles.certificate}>
            <div className={styles.imageContainer}>
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
