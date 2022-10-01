import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import TrianglesLogo from './UI/TrianglesLogo';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles['footer-container']} container`}>
        <TrianglesLogo footer />
        <Link href=''>home</Link>
        <Link href=''>portfolio</Link>
        <Link href=''>contact me</Link>
      </div>
    </div>
  );
};

export default Footer;
