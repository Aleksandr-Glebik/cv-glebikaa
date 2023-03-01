import React from 'react';
import styles from './Languages.module.scss';

const Languages: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parallax}>
        <div className={styles.content}>
            <h2 className={styles.content__title}>Languages</h2>
            <ul className={styles.content__list}>
                <li className={styles.content__list_item}>Russian - Native;</li>
                <li className={styles.content__list_item}>English - A2 (studying);</li>
                <li className={styles.content__list_item}>Polish -  A1;</li>
            </ul>
            <div className={styles.content__footer}>
              <h3 className={styles.content__footer_text}>&copy; Aleksandr Glebik 2023</h3>
              <a
                className={styles.content__footer_link}
                href='https://.pngtree.com'
                target='_blank'
                rel="noreferrer"
              >
                ru.pngtree.com
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
