import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>BA CONSULTING.</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passhref="true">
            <span className={styles.linkText}>WORK WITH US</span>
            <Image
              className={styles.imgFooter}
              src="/img/link.png"
              width="40px"
              height="40px"
              alt=""
            />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          BLOCK 4, LEKKI PAHSE 1,
          <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@BA.DEV
          <br /> +234 815 9011 732
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> _IG __austi_ne
        </div>
        <div className={styles.cardItem}>
          © 2022 BA CONSULTING,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
