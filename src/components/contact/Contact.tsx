import React from 'react'
import styles from './Contact.module.scss'
import clsx from 'clsx';

type ContactPropsType = {
    href: string
    imgSrc: string
    text: string
}

const Contact: React.FC<ContactPropsType> = ( { href, imgSrc, text} ) => {
  return (
    <li className={styles.list}>
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={clsx(styles.item, styles.item__link)}
        >
            <img src={imgSrc} alt="icon" className={styles.item__link_img}/>
            {text}
        </a>
    </li>
  )
}

export default Contact