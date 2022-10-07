import styles from '../../styles/components/UI/ButtonSecondary.module.scss'

const ButtonSecondary = ({ children }) => {
  return <button className={styles['btn-secondary']}>{children}</button>
}

export default ButtonSecondary
