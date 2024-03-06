import React from 'react'
import styles from './layout.module.css';
import { ReactComponent as Deposit } from "../icons/deposit.svg";
import { ReactComponent as Withdraw } from "../icons/withdraw.svg";
import { ReactComponent as Home } from "../icons/home.svg";


export default function Layout({ children }) {
    return (
        < div className={styles.layout}>
            <div className={styles.leftBar}>
                <div className={styles.boxLogo}>
                    <img src='logo_2_white.svg' alt='logo' className={styles.logo} />
                </div>
                <div className={styles.items}>
                    <div className={styles.box}>
                        <Home className={styles.icon} />
                        <span>Início</span>
                    </div>
                    <div className={styles.box}>
                        <Deposit className={styles.icon} />
                        <span>Depósito</span>
                    </div>
                    <div className={styles.box}>
                        <Withdraw className={styles.icon} />
                        <span>Levantamento</span>
                    </div>
                </div>
            </div>
        </ div>
    )
}
