import { NavLink, useNavigate } from "react-router-dom";
import styles from "../../styles/Login.module.css";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function RegisterForm({ registerData, setRegisterData }) {
    const { createUser, setUser } = useContext(UserContext);
    const [message, setMessage] = useState("");

    const nav = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();
        const userData = {
            id: Date.now(),
            bookmarks: [],
            ...registerData,
        };
        if (createUser(userData)) {
            setUser(userData);
            nav("/");
        } else {
            setMessage("Error to create user");
        }
    };

    const changeHandler = (e) => {
        setRegisterData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form className={styles.loginForm} onSubmit={registerHandler}>
            {message && <p className={styles.errorMessage}>{message}</p>}
            <input
                className={styles.loginInput}
                name="username"
                value={registerData.username}
                onChange={changeHandler}
                placeholder="Username"
                required
            />
            <input
                className={styles.loginInput}
                name="firstname"
                value={registerData.firstname}
                onChange={changeHandler}
                placeholder="First name"
                required
            />
            <input
                className={styles.loginInput}
                name="lastname"
                value={registerData.lastname}
                onChange={changeHandler}
                placeholder="Last name"
                required
            />
            <input
                className={styles.loginInput}
                name="email"
                value={registerData.email}
                onChange={changeHandler}
                placeholder="Email"
                type="email"
                required
            />
            <input
                className={styles.loginInput}
                name="password"
                value={registerData.password}
                onChange={changeHandler}
                placeholder="Password"
                type="password"
                required
            />
            <button className={styles.loginButton} type="submit">
                Register
            </button>
            <p>
                Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
        </form>
    );
}
