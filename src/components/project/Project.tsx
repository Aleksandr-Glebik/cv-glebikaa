import React from 'react';
import styles from './Project.module.scss'

type projectsType = {
  id: number
  name: string
  title: string
  projectLink: string
  projectImg: string
  technologies: string[]
}

const Project: React.FC<projectsType> = ( { title, projectLink, projectImg, technologies } ) => {
  return (
    <li className={styles.list}>
      <h3 className={styles.title}>{title}</h3>
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className={styles.link}>
        <img src={projectImg} alt="photo_project" className={styles.link__img} />
      </a>
      <div className={styles.info}>
        {technologies.map( (item, ind) => (
          <img
            key={`${item}_${ind}`}
            src={item}
            alt="icon"
            className={styles.info__item}
          />
        ))}
      </div>
    </li>
  );
};

export default Project;
