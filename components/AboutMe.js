import Link from 'next/link'
import ButtonSecondary from './UI/ButtonSecondary'
import styles from '../styles/components/AboutMe.module.scss'

const AboutMe = () => {
  return (
    <div className={`${styles['main-container']} container`} id="about-me">
      <div className={styles['image-container']} />

      <div className={styles['side-info']}>
        <h2>About Us</h2>
        <p>
        We&apos;re a friendly AI automation agency passionate about streamlining your workflows and boosting your bottom line. We focus on creating simple, effective automations that save you time, cut costs, and help your business grow. Our remote team loves turning complex processes into smooth, profitable outcomes. And when we&apos;re not optimizing business operations, you&apos;ll find us enjoying the outdoors, exploring new tech, or brainstorming fresh ideas. Let&apos;s chat about how automation can elevate your business!
        </p>
        <Link href="/portfolio">
          <a>
            <ButtonSecondary>go to portfolio</ButtonSecondary>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default AboutMe
