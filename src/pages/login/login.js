import React, { useState } from 'react'
import styles from "./login.module.css";
import Loading from '../../components/loading/loading';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {isLoading ? <Loading /> : ""}
            <div className={styles.centerLogo}><img src='logo.svg' alt='logo' onClick={() => window.location = "/"} /></div>
            <div className={styles.center}>
                <div className={styles.box}>
                    <div className={styles.inputLabel}>
                        <label>E-mail</label>
                        <div className={styles.inputBox}><input autoFocus /></div>
                    </div>
                    <div className={styles.inputLabel}>
                        <label>Palavra-passe</label>
                        <div className={styles.inputBox}><input type='password' /></div>
                    </div>
                    <div className={styles.columnButtons}>
                        <button onClick={() => setIsLoading(true)} className={styles.buttonLogin}>Iniciar sessão</button>
                        <div className={styles.option}>
                            <div className={styles.line}></div>
                            <span>ou</span>
                            <div className={styles.line}></div>
                        </div>
                        <button className={styles.buttonRegister}>Criar conta</button>
                    </div>
                </div>
            </div>
        </>
    )
}
