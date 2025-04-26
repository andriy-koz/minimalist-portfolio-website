import ButtonPrimary from './UI/ButtonPrimary'
import styles from '../styles/components/Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles['main-container']}>
      <div className="container">
        <div className={styles.info}>
          <h1>Intelligent workflows, simplified.</h1>
          <a href="#about-me">
            <ButtonPrimary>about us</ButtonPrimary>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
