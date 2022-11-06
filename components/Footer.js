import Link from 'next/link'
import Image from 'next/image'
import LogoTriangles from './UI/LogoTriangles'
import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles['footer-container']} container`}>
        <LogoTriangles footer className={styles.triangles}/>
        <div className={styles['links-container']}>
          <Link href="/">home</Link>
          <Link href="/portfolio">portfolio</Link>
          <Link href="/contact">contact me</Link>
        </div>
        <div className={styles['images-container']}>
          <Image
            src={'/icons/github-white.svg'}
            height={24}
            width={24}
            alt="GitHub logo"
          />
          <Image
            src={'/icons/twitter-white.svg'}
            height={24}
            width={24}
            alt="Twitter logo"
          />
          <Image
            src={'/icons/linkedin-white.svg'}
            height={24}
            width={24}
            alt="Linkedin logo"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
