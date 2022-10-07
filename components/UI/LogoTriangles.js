import styles from '../../styles/components/UI/LogoTriangles.module.scss'

const LogoTriangles = ({ footer }) => {
  return (
    <div className={styles.logo}>
      <div
        className={`${styles['logo-triangle']} ${
          footer && styles['logo-footer']
        }`}
      />
      <div
        className={`${styles['logo-triangle']} ${styles['logo-triangle-2']} ${
          footer && styles['logo-footer']
        }`}
      />
    </div>
  )
}

export default LogoTriangles
