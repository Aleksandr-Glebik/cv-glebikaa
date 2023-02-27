import React, { forwardRef } from 'react'
import styles from './Skill.module.scss'
import clsx from 'clsx'
import { motion } from 'framer-motion'

type skillPropsType = {
    text: string
    src: string
    id: number
    custom: number
    variants: any
}

type Ref = HTMLDivElement | null

const Skill: React.FC<skillPropsType> = forwardRef<Ref, skillPropsType>(({ text, src, id, custom, variants}, ref) => {
    return (
    <motion.div
      className={styles.skill}
      ref={ref}
      custom={custom}
      variants={variants}
    >
      <img src={src} alt="skill" className={clsx(styles.skill__icon, {
        [styles.small]: id === 0 || id === 2 || id === 5 || id === 6
      })}/>
      <p className={styles.skill__text}>{text}</p>
    </motion.div>
  )
})

export default Skill

export const MSkill = motion(Skill)
