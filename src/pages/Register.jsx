import { useState } from "react";
import styles from "../styles/Login.module.css";
import RegisterForm from "../components/Login/RegisterForm";

export default function Register() {
    const [registerData, setRegisterData] = useState({
        username: "",
        password: "",
    });

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Register</h2>
            <RegisterForm
                registerData={registerData}
                setRegisterData={setRegisterData}
            />
        </div>
    );
}
