import React from 'react'
import styles from './Loader.module.scss'

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
        <div className={styles.container}>
        <div className={styles['lds-spinner']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h3 className={styles.text}>Loading animation...</h3>
        </div>
    </div>
  )
}

export default Loader