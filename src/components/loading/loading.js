import React from 'react'
import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.background}>
            <div className={styles.center}>
                <img src='logo_2.svg' alt='logo' />
            </div>
        </div>
    )
}
