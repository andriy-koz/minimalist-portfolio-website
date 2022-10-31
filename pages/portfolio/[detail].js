import Image from 'next/image'
import Link from 'next/link'
import ContactMe from '../../components/ContactMe'
import ButtonSecondary from '../../components/UI/ButtonSecondary'
import ButtonProjects from '../../components/UI/ButtonProjects'
import db from '../../db.json'

import styles from '../../styles/pages/detail.module.scss'

const ProjectDetail = ({
  title,
  info,
  imgHero,
  imgPreview1,
  imgPreview2,
  span1,
  span2,
  next,
  prev,
}) => {
  return (<>
    <div className="container">
      <div className={styles['img-hero']}>
        <Image src={imgHero} alt="Main image" width={1110} height={500} layout="intrinsic"/>
      </div>
      <div className={styles.main}>
        <section className={styles.left}>
          <div className={styles['left-cta']}>
            <h2>{title}</h2>
            <p className={styles['info-desktop']}>{info}</p>
            <span>{span1}</span>
            <span>{span2}</span>
            <ButtonSecondary>visit website</ButtonSecondary>
          </div>
          <p className={styles['info-mobile']}>{info}</p>
        </section>
        <section className={styles.right}>
          <h3>Project Background</h3>
          <p>
            This project was a front-end challenge from Frontend Mentor. It’s a
            platform that enables you to practice building websites to a design
            and project brief. Each challenge includes mobile and desktop
            designs to show how the website should look at different screen
            sizes. Creating these projects has helped me refine my workflow and
            solve real-world coding problems. I’ve learned something new with
            each project, helping me to improve and adapt my style.
          </p>
          <h3>Static Previews</h3>
          <div>
            <div className={styles['preview-1']}>
              <Image
                src={imgPreview1}
                alt="First static preview"
                width={635}
                height={400}
                layout="fixed"
              />
            </div>
            <div className={styles['preview-2']}>
              <Image
                src={imgPreview2}
                alt="Second static preview"
                width={635}
                height={400}
                layout="fixed"
              />
            </div>
          </div>
        </section>
      </div>
      <nav className={styles.nav}>
        <Link href={`/portfolio/${prev.toLowerCase()}`}>
          <a>
            <ButtonProjects direction="prev">{prev}</ButtonProjects>
          </a>
        </Link>
        <div className={styles.midLine} />
        <Link href={`/portfolio/${next.toLowerCase()}`}>
          <a>
            <ButtonProjects direction="next">{next}</ButtonProjects>
          </a>
        </Link>
      </nav>
    </div>
      <ContactMe mt={75} mb={80} />
    </>)
}

export default ProjectDetail

export async function getStaticPaths() {
  const getPaths = db.map((item) => `/portfolio/${item.id}`)

  return {
    paths: getPaths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const [info] = db.filter((item) => item.id === params.detail)

  return {
    props: {
      title: info.title,
      info: info.info,
      imgHero: info['img-hero'],
      imgPreview1: info['img-preview-1'],
      imgPreview2: info['img-preview-2'],
      span1: info['span-1'],
      span2: info['span-2'],
      next: info.next,
      prev: info.prev,
    },
  }
}
