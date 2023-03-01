import React from 'react'
import styles from './Projects.module.scss'

import { projectsList } from '../../data/ProjectsData'
import Project from '../../components/project/Project'

const Projects: React.FC = () => {
  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.parallax}>
        <section className={styles.content}>
            <h2 className={styles.content__title}>Example Projects</h2>
            <ul className={styles.content__items}>
                {projectsList.map( ( item, ind ) => (
                  <Project
                    key={`${item}_${ind}`}
                    {...item}
                  />
                ))}
            </ul>
        </section>
      </div>
    </div>
  )
}

export default Projects