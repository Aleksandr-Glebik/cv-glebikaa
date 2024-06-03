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
            I am a front-end developer with over 3 years of experience in IT.
            <br />
            My stack: Next, React, Redux, TypeScript, Javascript, HTML, CSS, SCSS, React-hook-form.
          </motion.p>
          <motion.p className={styles.content__text} custom={4} variants={contentAnimation}>
            - SPA development according to documentation ( Next / React );
            <br />
            - adding functionality and business logic for app, interacting with the backend;
            <br />
            - creating sites, individual pages and components, adding animation and interactivity for app, work with svg;
            <br />
            - search for and corrected errors in the existing code;
            <br />
            - refactoring code on the ECMAScript 6;
            <br />
            - refactoring of class react components to functional react components;
            <br />
            - creating landing pages based on layouts from Figma (Perfect Pixel);
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
