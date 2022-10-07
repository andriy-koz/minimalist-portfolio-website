import Image from 'next/image'
import Link from 'next/link'
import ButtonSecondary from './UI/ButtonSecondary'
import styles from '../styles/components/ProjectInfo.module.scss'

const ProjectInfo = ({ title, info, src, reverse }) => {
  return (
    <div
      className={`${styles.main} container ${reverse ? styles.reverse : ''}`}
    >
      <div className={styles.image}>
        <Image
          src={src}
          alt="Manage preview"
          width={540}
          height={500}
          layout="fixed"
        />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{info}</p>
        <Link href={`/portfolio/${title.toLowerCase()}`}>
          <a>
            <ButtonSecondary>view project</ButtonSecondary>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectInfo
