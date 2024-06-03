import React from 'react';
import styles from './Languages.module.scss';
import { motion } from 'framer-motion';

import { contentAnimation } from '../../utils/amimation';

const Languages: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parallax}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className={styles.content}>
          <motion.h2 custom={1} variants={contentAnimation} className={styles.content__title}>
            Languages
          </motion.h2>
          <motion.ul className={styles.content__list} custom={2} variants={contentAnimation}>
            <li className={styles.content__list_item}>Russian - Native;</li>
            <li className={styles.content__list_item}>English - B1 (studying);</li>
            <li className={styles.content__list_item}>Polish - A1;</li>
          </motion.ul>
          <div className={styles.content__footer}>
            <h3 className={styles.content__footer_text}>&copy; Aleksandr Glebik 2023</h3>
            <a
              className={styles.content__footer_link}
              href="https://ru.pngtree.com/"
              target="_blank"
              rel="noreferrer">
              ru.pngtree.com
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Languages;
