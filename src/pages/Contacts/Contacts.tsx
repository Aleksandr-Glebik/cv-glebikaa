import React from 'react';
import styles from './Contacts.module.scss';
import { motion } from 'framer-motion'

import imgPngSrc from '../../assets/img/astro.png'
import MContact from '../../components/contact/Contact';
import { contactsArr } from '../../data/ContactsData';
import { imgAnimation, contentAnimation, itemAnimation } from '../../utils/amimation';

const Contacts: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parallax}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.2,
            once: true
          }}
          className={styles.section}
        >
            <motion.img
              src={imgPngSrc}
              alt="astronaut_img"
              className={styles.images}
              custom={2}
              variants={imgAnimation}
            />
            <div className={styles.content}>
                <motion.h2
                  className={styles.content__title}
                  custom={1}
                  variants={contentAnimation}
                >
                    Contacts
                </motion.h2>
                <motion.ul
                  className={styles.content__items}
                  custom={3}
                  variants={contentAnimation}
                >
                    {contactsArr.map( (item, ind) => (
                        <MContact
                          key={`${item}_${ind}`}
                          text={item.text}
                          href={item.href}
                          imgSrc={item.imgSrc}
                          custom={(ind + 2) * 1.5}
                          variants={itemAnimation}
                        />
                    ))}
                </motion.ul>
            </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contacts;