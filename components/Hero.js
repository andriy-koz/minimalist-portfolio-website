import ButtonPrimary from './UI/ButtonPrimary'
import styles from '../styles/components/Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles['main-container']}>
      <div className="container">
        <div className={styles.info}>
          <h1>Hey, I&apos;m Alex Spencer and I love building beautiful websites</h1>
          <a href="#about-me">
            <ButtonPrimary>about me</ButtonPrimary>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
