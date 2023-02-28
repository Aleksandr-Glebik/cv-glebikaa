import React from 'react';
import styles from './About.module.scss';
import { motion } from 'framer-motion';

const contentAnimation = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

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
          }}>
          <motion.h2 className={styles.content__title} custom={1} variants={contentAnimation}>
            About me
          </motion.h2>
          <motion.p className={styles.content__text} custom={3} variants={contentAnimation}>
            I am a freelance front-end developer, in the IT field for about 2 years.
            <br />
            My stack: TypeScript, Javascript, React, Redux Toolkit.
          </motion.p>
          <motion.p className={styles.content__text} custom={4} variants={contentAnimation}>
            - creating landing pages according to the customer's layout (Perfect Pixel);
            <br />
            - development of applications with the functionality specified in the terms of
            reference;
            <br />
            - adding functionality and animation to websites;
            <br />
            - search for and corrected errors in the existing code;
            <br />
            - refactoring code on the ECMAScript 6;
            <br />
            - createing custom react components and custom hooks;
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
