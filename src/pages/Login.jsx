import { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import styles from "../styles/Login.module.css";

export default function Login() {
    const [loginData, setLoginData] = useState({ username: "", password: "" });

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Login</h2>
            <LoginForm loginData={loginData} setLoginData={setLoginData} />
        </div>
    );
}
