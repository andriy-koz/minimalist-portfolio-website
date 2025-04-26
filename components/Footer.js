import Link from 'next/link'
import Image from 'next/image'
import LogoTriangles from './UI/LogoTriangles'
import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles['footer-container']} container`}>
      <div className={styles.logoDark}>
        <Image src="/icons/SolidMay_logo_dark.webp" alt="SolidMay logo" width={130} height={32} layout="fixed" />
      </div>
        <div className={styles['links-container']}>
          <Link href="/">home</Link>
          <Link href="/portfolio">portfolio</Link>
          <Link href="/contact">contact us</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
