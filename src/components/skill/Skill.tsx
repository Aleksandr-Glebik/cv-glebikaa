import React from 'react'
import styles from './Skill.module.scss'
import clsx from 'clsx'

type skillPropsType = {
    text: string
    src: string
    id: number
}

const Skill: React.FC<skillPropsType> = ({ text, src, id}) => {
    return (
    <div className={styles.skill}>
      <img src={src} alt="skill" className={clsx(styles.skill__icon, {
        [styles.small]: id === 0 || id === 2 || id === 5 || id === 6
      })}/>
      <p className={styles.skill__text}>{text}</p>
    </div>
  )
}

export default Skill