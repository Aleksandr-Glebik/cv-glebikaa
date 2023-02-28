import React from 'react';
import styles from './Contacts.module.scss';
import { motion } from 'framer-motion'

import MContact from '../../components/contact/Contact';

import imgPngSrc from '../../assets/img/astro.png'
import linkedInSrc from '../../assets/icon/linkedIn.png'
import githubWhiteSrc from '../../assets/icon/githubWhite.png'
import eMailSrc from '../../assets/icon/eMail.png'
import phoneSrc from '../../assets/icon/phone.png'

const contactsArr = [
    {
        id: 0,
        title: 'linkedin',
        href: "https://www.linkedin.com/in/aleksandr-glebik-115530249/",
        imgSrc: linkedInSrc,
        text: 'LinkedIn: Aleksandr-Glebik'
    },
    {
        id: 1,
        title: 'github',
        href: "https://github.com/Aleksandr-Glebik?tab=repositories",
        imgSrc: githubWhiteSrc,
        text: 'GitHub: Aleksandr-Glebik'
    },
    {
        id: 2,
        title: 'mail',
        href: "mailto:glebikaa@mail.ru?subject=Offer&body=We_offer_you_good_job_with_great_salary_of_3000$:)",
        imgSrc: eMailSrc,
        text: '@mail: glebikaa@mail.ru'
    },
    {
        id: 3,
        title: 'phone',
        href: "tel:+375333106162",
        imgSrc: phoneSrc,
        text: '+375-(33)-310-61-62'
    },
]

const imgAnimation = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom: number)  => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2}
    }),
}
const contentAnimation = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: (custom: number)  => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2}
    }),
  }
const itemAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2}
    })
}

const Contacts: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parallax}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.2,
            // once: true
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