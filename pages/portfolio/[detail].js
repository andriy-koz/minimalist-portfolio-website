import Image from "next/image"
import ContactMe from "../../components/ContactMe"
import ButtonSecondary from "../../components/UI/ButtonSecondary"
import ButtonProjects from "../../components/UI/ButtonProjects"

import styles from "../../styles/detail.module.scss"

const ProjectDetail = () => {
  return (
    <div className="container">
      <div className={styles["img-hero"]}>
        <Image
          src="/image-manage-hero.jpg"
          alt="Main image"
          width={1110}
          height={500}
        />
      </div>
      <div className={styles.main}>
        <section className={styles.left}>
          <h2>Manage</h2>
          <p>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
          <span>Interction Design / Front End Development</span>
          <span>HTML / CSS / JS</span>
          <ButtonSecondary>visit website</ButtonSecondary>
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
            <div className={styles["preview-1"]}>
              <Image
                src="/image-manage-preview-1.jpg"
                alt="First static preview"
                width={635}
                height={400}
                layout="fixed"
              />
            </div>
            <div className={styles["preview-2"]}>
              <Image
                src="/image-manage-preview-2.jpg"
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
        <ButtonProjects direction="prev">Flyo</ButtonProjects>
        <div className={styles.midLine} />
        <ButtonProjects direction="next">Bookmark</ButtonProjects>
      </nav>
      <ContactMe mt={114} mb={132} />
    </div>
  )
}

export default ProjectDetail
