import styles from '../../styles/TrianglesLogo.module.scss';

const TrianglesLogo = ({ footer }) => {
  return (
    <div className={styles.logo}>
      <div
        className={`${styles['logo-triangle']} ${
          footer && styles['logo-footer']
        }`}
      />
      <div
        className={`${styles['logo-triangle']} ${styles['logo-triangle-2']} ${
          footer && styles['logo-footer']
        }`}
      />
    </div>
  );
};

export default TrianglesLogo;
