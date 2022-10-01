import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles['footer-container']} container`}></div>
    </div>
  );
};

export default Footer;
