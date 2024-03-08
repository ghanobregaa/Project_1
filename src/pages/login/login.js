import React, { useState } from 'react'
import styles from "./login.module.css";
import Loading from '../../components/loading/loading';

export default function Login() {

    const [isLoading, setIsLoading] = useState(false);

    function fetchLogin() {
        setIsLoading(true);
        setTimeout(() => {
            //window.location = "/dashboard";
        }, 2000);
    }

    return (
        <>
            {isLoading ? <Loading /> : ""}
            <div className={styles.center}>
                <div className={styles.box}>
                    <div className={styles.boxContainer}>
                        <p className={styles.title}>Entrar</p>
                        <div className={styles.column}>
                            <div className={styles.labels}>
                                <label>E-mail</label>
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
                        <div onClick={() => fetchLogin()} className={styles.btnLogin}>Iniciar sessão</div>
                    </div>
                </div>
            </div>
        </>
    )
}
