import { useContext, useState } from "react";
import styles from "../../styles/Login.module.css";
import UserContext from "../../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginForm({ loginData, setLoginData }) {
    const { setUser } = useContext(UserContext);
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
        const registeredUsers = JSON.parse(localStorage.getItem("users"));
        if (registeredUsers) {
            const userInfo = registeredUsers.find(
                (user) =>
                    user.username === loginData.username &&
                    user.password === loginData.password
            );
            if (userInfo) {
                setUser(loginData);
                nav("/");
            } else {
                setMessage("Authentication failed");
            }
        } else {
            setMessage("Failed to get users");
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
