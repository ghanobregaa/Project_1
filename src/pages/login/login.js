import React from 'react'
import styles from "./login.module.css";

export default function Login() {

    return (
        <>
            <div className={styles.center}>
                <div className={styles.box}>
                    <div className={styles.boxContainer}>
                        <p className={styles.title}>Entrar</p>
                        <div className={styles.column}>
                            <div className={styles.labels}>
                                <label>Email</label>
                                <div className={styles.boxInput}>
                                    <input autoFocus />
                                </div>
                            </div>
                            <div className={styles.labels}>
                                <label>Palavra-passe</label>
                                <div className={styles.boxInput}>
                                    <input type='password' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.btnLogin}>Iniciar sessão</div>
                    </div>
                </div>
            </div>
        </>
    )
}
