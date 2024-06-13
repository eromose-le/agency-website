import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Roca Delta CONSULTING.</h1>
        <h1 className={styles.linkTitle}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link className={styles.linkText} href="/contact">
              BOOK CONSULTATION WITH US
            </Link>
            <Link className={styles.linkText} href="/contact">
              <Image
                className={styles.imgFooter}
                src="/assets/img/link.png
"
                width={20}
                height={20}
                alt=""
              />
            </Link>
          </div>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Lagos,
          <br /> NIGERIA
        </div>
        <div className={styles.cardItem}>
          CONTACT: rocadeltaconsulting@gmail.com
          <br /> +234 702 506 9316
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> IG: rocadeltaconsulting
        </div>
        <div className={styles.cardItem}>
          © 2024 Roca Delta CONSULTING.,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
