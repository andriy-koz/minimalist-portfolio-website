import Image from 'next/image'
import styles from '../../styles/components/UI/ButtonProjects.module.scss'

const ButtonProjects = ({ children, direction }) => {
  let arrowSrc,
    spanText = null

  if (direction === 'prev') {
    arrowSrc = '/icons/arrow-left.svg'
    spanText = 'Previous Project'
  }
  if (direction === 'next') {
    arrowSrc = '/icons/arrow-right.svg'
    spanText = 'Next Project'
  }

  return (
    <button
      className={`${styles['btn-projects']} ${
        direction === 'next' ? styles['invert'] : ''
      }`}
    >
      <Image src={arrowSrc} alt="Arrow icon" width={10} height={16} />
      <div className={styles['btn-text']}>
        <h3>{children}</h3> <span>{spanText}</span>
      </div>
    </button>
  )
}

export default ButtonProjects
