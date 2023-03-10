import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';

import { clsx } from 'clsx';
import { CSSTransition } from 'react-transition-group';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible((prev) => !prev);
    }, 6000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div className={styles.wrapper}>
      <CSSTransition in={isVisible} classNames={'bgStars'} timeout={6000}>
        <div className={styles.backgroundStars}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'starsCircle'} timeout={6000}>
        <div className={styles.stars}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'astronautFly'} timeout={6000}>
        <div className={styles.astronaut}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyDown'} timeout={6000}>
        <div className={clsx(styles.css, styles.icon)}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyDown'} timeout={6000}>
        <div className={clsx(styles.react, styles.icon)}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyDown'} timeout={6000}>
        <div className={clsx(styles.webpack, styles.icon)}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyDown'} timeout={6000}>
        <div className={clsx(styles.sass, styles.icon)}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyDown'} timeout={6000}>
        <div className={clsx(styles.figma, styles.icon)}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyLeft'} timeout={6000}>
        <div className={clsx(styles.redux, styles.icon)}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyLeft'} timeout={6000}>
        <div className={clsx(styles.html, styles.icon)}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyLeft'} timeout={6000}>
        <div className={clsx(styles.js, styles.icon)}></div>
      </CSSTransition>
      <CSSTransition in={isVisible} classNames={'iconFlyLeft'} timeout={6000}>
        <div className={clsx(styles.github, styles.icon)}></div>
      </CSSTransition>

      <CSSTransition in={isVisible} classNames={'iconFlyLeft'} timeout={6000}>
        <div className={clsx(styles.text__container)}>
          <CSSTransition in={isVisible} classNames={'textShow'} timeout={6000}>
            <h1 className={clsx(styles.text__container_title)}>Frontend Developer</h1>
          </CSSTransition>
          <CSSTransition in={isVisible} classNames={'textShow'} timeout={6000}>
            <p className={clsx(styles.text__container_text)}>Aleksandr Glebik</p>
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Home;
