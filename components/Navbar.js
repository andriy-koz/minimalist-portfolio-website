import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import TrianglesLogo from './UI/TrianglesLogo';

const Navbar = () => {
  return (
    <nav className={`container ${styles.navbar}`}>
      <TrianglesLogo />
      <div className={styles.links}>
        <Link href='/'>home</Link>
        <Link href='/portfolio'>portfolio</Link>
        <Link href=''>contact me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
