import styles from '../../styles/Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={`container ${styles.navbar}`}>
      <div className={styles.logo}>
        <div className={styles['logo-triangle']} />
        <div
          className={`${styles['logo-triangle']} ${styles['logo-triangle-2']}`}
        />
      </div>
      <div className={styles.links}>
        <Link href=''>home</Link>
        <Link href=''>portfolio</Link>
        <Link href=''>contact me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
