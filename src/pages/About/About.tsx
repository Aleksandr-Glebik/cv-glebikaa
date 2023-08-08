import React from 'react';
import styles from './About.module.scss';
import { motion } from 'framer-motion';

import { contentAnimation } from '../../utils/amimation';

const About: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parallax}>
        <motion.section
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.2,
            once: true
          }}>
          <motion.h2 className={styles.content__title} custom={1} variants={contentAnimation}>
            About me
          </motion.h2>
          <motion.p className={styles.content__text} custom={3} variants={contentAnimation}>
            I am a freelance front-end developer with over 2 years of experience in IT.
            <br />
            My stack: TypeScript, Javascript, React, Redux, HTML, CSS, SCSS.
          </motion.p>
          <motion.p className={styles.content__text} custom={4} variants={contentAnimation}>
            - SPA development in TypeScript, React/React - Redux, according to documentation;
            <br />
            - creating sites, individual pages, adding animation and interactivity;
            <br />
            - creating landing pages based on layouts from Figma (Perfect Pixel);
            <br />
            - search for and corrected errors in the existing code;
            <br />
            - refactoring code on the ECMAScript 6;
            <br />
            - refactoring of class react components to functional react components;
            <br />
          </motion.p>
          <motion.p className={styles.content__text} custom={5} variants={contentAnimation}>
            At the moment I am looking for a company for employment on a full time, and open to
            freelance tasks.
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
