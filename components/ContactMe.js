import ButtonSecondary from './UI/ButtonSecondary';

import styles from '../styles/ContactMe.module.scss';

const ContactMe = () => {
  return (
    <div className={`${styles.contacto} container`}>
      <h2>Interested in doing a project together?</h2>
      <div className={styles.separador}></div>
      <ButtonSecondary>contact me</ButtonSecondary>
    </div>
  );
};

export default ContactMe;
