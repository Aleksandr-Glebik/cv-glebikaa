import React from 'react';
import styles from './Contacts.module.scss';

import Contact from '../../components/contact/Contact';

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

const Contacts: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parallax}>
        <section className={styles.section}>
            <img src={imgPngSrc} alt="astronaut_img" className={styles.images}/>
            <div className={styles.content}>
                <h2 className={styles.content__title}>Contacts</h2>
                <ul className={styles.content__items}>
                    {contactsArr.map( (item, ind) => (
                        <Contact key={`${item}_${ind}`} {...item} />
                    ))}
                </ul>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;