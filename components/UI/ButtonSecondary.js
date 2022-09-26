import styles from '../../styles/ButtonSecondary.module.scss';

const ButtonSecondary = ({ children }) => {
  return <button className={styles['btn-secondary']}>{children}</button>;
};

export default ButtonSecondary;
