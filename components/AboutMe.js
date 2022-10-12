import Image from 'next/image'
import Link from 'next/link'
import ButtonSecondary from './UI/ButtonSecondary'
import styles from '../styles/components/AboutMe.module.scss'

const AboutMe = () => {
  return (
    <div className={`${styles['main-container']} container`} id="about-me">
      <div className={styles['image-container']} />

      <div className={styles['side-info']}>
        <h2>About Me</h2>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
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
