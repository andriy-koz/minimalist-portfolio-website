import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/Navbar.module.scss'

const Navbar = () => {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false);

  const menuHandler = () => {
    setOpenMenu(prevState => !prevState);
  }

  return (
    <nav className={`container ${styles.navbar}`}>
      
      <div className={styles.logo}>
        <Image src="/icons/SolidMay_logo.webp" alt="SolidMay logo" width={130} height={32} layout="fixed" />
      </div>

      <ul className={styles.links}>
        <li className={router.pathname === '/' ? styles.active : ''}>
          <Link href="/">home</Link>
        </li>
        <li
          className={
            router.pathname.match(/\/portfolio.*/gm) ? styles.active : ''
          }
        >
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li className={router.pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact">contact us</Link>
        </li>
      </ul>

      {/* MOBILE */}

      <div className={styles.menu}>
        <Image onClick={menuHandler} src={'/icons/hamburger.svg'} width={24} height={13} alt='Hamburger icon'/>
        <ul className={`${styles['mobile-menu']} ${!openMenu ? styles.hide : ''}`}> 
        <li className={router.pathname === '/' ? styles.active : ''} onClick={menuHandler}>
          <Link href="/">home</Link>
        </li>
        <li
        onClick={menuHandler}
          className={
            router.pathname.match(/\/portfolio.*/gm) ? styles.active : ''
          }
        >
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li className={router.pathname === '/contact' ? styles.active : ''} onClick={menuHandler}>
          <Link href="/contact">contact us</Link>
        </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
