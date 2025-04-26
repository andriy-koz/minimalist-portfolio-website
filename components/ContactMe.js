import Link from 'next/link'
import ButtonSecondary from './UI/ButtonSecondary'
import styles from '../styles/components/ContactMe.module.scss'

const ContactMe = ({ mt, mb }) => {
  return (
    <div className={`${styles.contacto} container ${`mt-${mt}`} ${`mb-${mb}`}`}>
      <h2>Interested in doing a project together?</h2>
      <div className={styles.separador}></div>
      <Link href="/contact">
        <a>
          <ButtonSecondary>contact us</ButtonSecondary>
        </a>
      </Link>
    </div>
  )
}

export default ContactMe
