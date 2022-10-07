import db from '../../db.json';
import ContactMe from '../../components/ContactMe';
import ProjectInfo from '../../components/ProjectInfo';
import styles from '../../styles/portfolio.module.scss';

const portfolio = () => {
  return (
    <>
      <ul className={styles['projects-list']}>
        {db.map((item, index) => (
          <li key={index}>
            <ProjectInfo
              title={item.title}
              info={item.info}
              src={item.src}
              reverse={index % 2 === 0 ? false : true}
            />
          </li>
        ))}
      </ul>
      <ContactMe mt={150} mb={132} />
    </>
  );
};

export default portfolio;
