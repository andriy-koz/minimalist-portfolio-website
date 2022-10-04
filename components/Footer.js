import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.scss';
import TrianglesLogo from './UI/TrianglesLogo';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles['footer-container']} container`}>
        <TrianglesLogo footer />
        <div className={styles['links-container']}>
          <Link href=''>home</Link>
          <Link href=''>portfolio</Link>
          <Link href=''>contact me</Link>
        </div>
        <div className={styles['images-container']}>
          <Image
            src={'/logo-github.svg'}
            height={24}
            width={24}
            alt='GitHub logo'
          />
          <Image
            src={'/logo-twitter.svg'}
            height={24}
            width={24}
            alt='Twitter logo'
          />
          <Image
            src={'/logo-linkedin.svg'}
            height={24}
            width={24}
            alt='Linkedin logo'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
