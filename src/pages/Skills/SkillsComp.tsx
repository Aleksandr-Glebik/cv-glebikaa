import React from 'react'
import styles from './SkillsComp.module.scss'
import { motion } from 'framer-motion'

import skillsAstronaut from '../../assets/img/astronautCase.png'
import MSkill from '../../components/skill/Skill'
import { skillsList } from '../../data/SkillsData'
import { imgAnimation, contentAnimation, itemAnimation } from '../../utils/amimation'

const SkillsComp: React.FC = () => {
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
          className={styles.container}
        >
          <motion.img
            src={skillsAstronaut}
            alt="astronaut"
            className={styles.astronaut}
            custom={2}
            variants={imgAnimation}
          />
          <div className={styles.content}>
            <motion.h2
              className={styles.content_title}
              custom={1}
              variants={contentAnimation}
            >Skills:</motion.h2>
            <motion.div
              custom={2}
              variants={contentAnimation}
              className={styles.content_items}
            >
              {skillsList.map( (item, ind) => (
                <MSkill
                  key={`${item.id}_${ind}`}
                  text={item.text}
                  src={item.path}
                  id={Number(item.id)}
                  custom={ind + 1}
                  variants={itemAnimation}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default SkillsComp
