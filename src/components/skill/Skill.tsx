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
      className={clsx(styles.skill, {
        [styles.div1]: id === 0,
        [styles.div2]: id === 1,
        [styles.div3]: id === 2,
        [styles.div4]: id === 3,
        [styles.div5]: id === 4,
        [styles.div6]: id === 5,
        [styles.div7]: id === 6,
        [styles.div8]: id === 7,
        [styles.div9]: id === 8,
        [styles.div10]: id === 9,
      })}
      ref={ref}
      custom={custom}
      variants={variants}
    >
      <img src={src} alt="skill" className={clsx(styles.skill__icon, {
        [styles.small]: id === 0 || id === 2 || id === 5 || id === 6,
      })}/>
      <p className={styles.skill__text}>{text}</p>
    </motion.div>
  )
})

export default Skill

export const MSkill = motion(Skill)
