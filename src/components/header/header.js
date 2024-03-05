import React from 'react'
import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.navBar}>
                <img className={styles.logo} src="logo.svg" alt='logo' onClick={() => window.location = "/"} />
                <div className={styles.tabs}>
                    <a href='/login' className={styles.btnLogin}>Iniciar sessão</a>
                    <a href='/login' className={styles.btnRegister}>Criar conta</a>
                </div>
            </div>
        </div>
    )
}
