import React from 'react'
import styles from "./login.module.css";

export default function Login() {
    return (
        <div className={styles.center}>
            <div className={styles.box}>
                <div className={styles.inputLabel}>
                    <label>E-mail</label>
                    <div className={styles.inputBox}><input /></div>
                </div>
                <div className={styles.inputLabel}>
                    <label>Password</label>
                    <div className={styles.inputBox}><input type='password' /></div>
                </div>
                <div className={styles.columnButtons}>
                    <button className={styles.buttonLogin}>Iniciar sessão</button>
                    <div className={styles.option}>
                        <div className={styles.line}></div>
                        <span>ou</span>
                        <div className={styles.line}></div>
                    </div>
                    <button className={styles.buttonRegister}>Criar uma conta</button>
                </div>
            </div>
        </div>
    )
}
