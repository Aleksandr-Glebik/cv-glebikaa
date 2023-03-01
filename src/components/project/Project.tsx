import React, { forwardRef } from 'react';
import styles from './Project.module.scss'
import { motion } from 'framer-motion'
import { contentAnimation } from '../../utils/amimation';

type projectsType = {
  id: number
  name: string
  title: string
  projectLink: string
  projectImg: string
  technologies: string[]
  custom: number
  variants: any
}

type Ref = HTMLLIElement | null

const Project: React.FC<projectsType> = forwardRef<Ref, projectsType>(( { title, projectLink, projectImg, technologies, custom, variants },  ref) => {
  return (
    <motion.li
      className={styles.list}
      ref={ref}
      custom={custom}
      variants={variants}
    >
      <h3 className={styles.title}>{title}</h3>
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className={styles.link}>
        <img src={projectImg} alt="photo_project" className={styles.link__img} />
      </a>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.2,
          once: true
        }}
        className={styles.info}
      >
        {technologies.map( (item, ind) => (
          <motion.img
            key={`${item}_${ind}`}
            src={item}
            alt="icon"
            custom={(ind + 2) * 1.2}
            variants={contentAnimation}
            className={styles.info__item}
          />
        ))}
      </motion.div>
    </motion.li>
  );
})

export default Project;

export const MProject = motion(Project)
