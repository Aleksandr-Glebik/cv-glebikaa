import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'

import { clsx } from 'clsx'
import {  CSSTransition } from 'react-transition-group'

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect( () => {
    const timer = setTimeout(() => {
      setIsVisible(prev => !prev)
    }, 6000);
    return () => clearTimeout(timer)
  }, [isVisible])

  return (
    <div className={styles.wrapper}>
        <CSSTransition
          in={isVisible}
          classNames={'bgStars'}
          timeout={6000}
        >
          <div className={styles.backgroundStars}></div>
        </CSSTransition>
        <CSSTransition
          in={isVisible}
          classNames={'starsCircle'}
          timeout={6000}
        >
          <div className={styles.stars}></div>
        </CSSTransition>
        <CSSTransition
          in={isVisible}
          classNames={'astronautFly'}
          timeout={6000}
        >
          <div className={styles.astronaut}></div>
        </CSSTransition>
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