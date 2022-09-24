import styles from '../../styles/ButtonPrimary.module.scss';

const ButtonPrimary = ({ children }) => {
  return (
    <button className={styles['btn-primary']}>
      <div className={styles['btn-left-box']}>
        <div className={styles['arrows-container']}>
          <div className={styles['stroke-one']}></div>
          <div className={styles['stroke-two']}></div>
          <div className={styles['stroke-three']}></div>
        </div>
      </div>
      {children}
    </button>
  );
};

export default ButtonPrimary;
