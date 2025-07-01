import { useContext, useState } from "react";
import styles from "../../styles/Login.module.css";
import UserContext from "../../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginForm({ loginData, setLoginData }) {
    const { authUser } = useContext(UserContext);
    const nav = useNavigate();

    const [message, setMessage] = useState("");

    const changeHandler = (e) => {
        setLoginData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const loginHandler = (e) => {
        e.preventDefault();
        if (authUser(loginData)) {
            nav("/");
        } else {
            setMessage("Authentication failed");
        }
    };

    return (
        <form className={styles.loginForm} onSubmit={loginHandler}>
            {message && <p className={styles.errorMessage}>{message}</p>}
            <input
                className={styles.loginInput}
                name="username"
                value={loginData.username}
                onChange={changeHandler}
                placeholder="Username"
                required
            />
            <input
                className={styles.loginInput}
                name="password"
                value={loginData.password}
                onChange={changeHandler}
                placeholder="Password"
                type="password"
                required
            />
            <button className={styles.loginButton} type="submit">
                Login
            </button>
            <p>
                Don't have an account?{" "}
                <NavLink to="/register">Register</NavLink>
            </p>
        </form>
    );
}
