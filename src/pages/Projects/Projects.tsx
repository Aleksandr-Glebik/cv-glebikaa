import React from 'react'
import styles from './Projects.module.scss'
import { motion } from 'framer-motion'

import { projectsList } from '../../data/ProjectsData'
import MProject from '../../components/project/Project'
import { contentAnimation, itemAnimation } from '../../utils/amimation'


const Projects: React.FC = () => {
  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.parallax}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.2,
            once: true
          }}
          className={styles.content}
        >
            <motion.h2
              custom={1}
              variants={contentAnimation}
              className={styles.content__title}
            >Example Projects</motion.h2>
            <motion.ul
              custom={2}
              variants={contentAnimation}
              className={styles.content__items}
            >
                {projectsList.map( ( item, ind ) => (
                  <MProject
                    key={`${item}_${ind}`}
                    custom={(ind + 2) * 1.5}
                    variants={itemAnimation}
                    {...item}
                  />
                ))}
            </motion.ul>
        </motion.section>
      </div>
    </div>
  )
}

export default Projects