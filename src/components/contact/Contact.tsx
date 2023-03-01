import React, { forwardRef } from 'react'
import styles from './Contact.module.scss'
import clsx from 'clsx';
import { motion } from 'framer-motion'

type ContactPropsType = {
    href: string
    imgSrc: string
    text: string
    custom: number
    variants: any
}

type Ref = HTMLLIElement | null

const Contact: React.FC<ContactPropsType> = forwardRef<Ref, ContactPropsType>(( { href, imgSrc, text, custom, variants}, ref) => {
  return (
    <motion.li
      className={styles.list}
      ref={ref}
      custom={custom}
      variants={variants}
    >
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={clsx(styles.item, styles.item__link)}
        >
            <img src={imgSrc} alt="icon" className={styles.item__link_img}/>
            {text}
        </a>
    </motion.li>
  )
})

export default Contact

export const MContact = motion(Contact)