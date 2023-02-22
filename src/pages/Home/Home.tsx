import React from 'react'
import styles from './Home.module.scss'
import { clsx } from 'clsx'

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.stars}></div>
        <div className={styles.astronaut}></div>
        <div className={clsx(styles.html, styles.icon)}></div>
        <div className={clsx(styles.css, styles.icon)}></div>
        <div className={clsx(styles.js, styles.icon)}></div>
        <div className={clsx(styles.react, styles.icon)}></div>
        <div className={clsx(styles.redux, styles.icon)}></div>
        <div className={clsx(styles.sass, styles.icon)}></div>
        <div className={clsx(styles.webpack, styles.icon)}></div>
        <div className={clsx(styles.github, styles.icon)}></div>
        <div className={clsx(styles.figma, styles.icon)}></div>
    </div>
  )
}

export default Home