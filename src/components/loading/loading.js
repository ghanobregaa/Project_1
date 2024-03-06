import React from 'react'
import styles from './loading.module.css';
import { ReactComponent as Logo } from "../../icons/logo_2.svg";

export default function Loading() {
    return (
        <div className={styles.background}>
            <div className={styles.center}>
                <Logo />
            </div>
        </div>
    )
}
