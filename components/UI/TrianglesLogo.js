import styles from '../../styles/TrianglesLogo.module.scss';

const TrianglesLogo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles['logo-triangle']} />
      <div
        className={`${styles['logo-triangle']} ${styles['logo-triangle-2']}`}
      />
    </div>
  );
};

export default TrianglesLogo;
