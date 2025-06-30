import { useContext } from "react";
import styles from "../../styles/Login.module.css";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ loginData, setLoginData }) {
    const { setUser } = useContext(UserContext);
    const nav = useNavigate();

    const changeHandler = (e) => {
        setLoginData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const loginHandler = (e) => {
        e.preventDefault();
        setUser(loginData);
        nav("/");
    };

    return (
        <form className={styles.loginForm} onSubmit={loginHandler}>
            <input
                className={styles.loginInput}
                name="username"
                value={loginData.username}
                onChange={changeHandler}
                placeholder="Username"
                autoComplete="username"
            />
            <input
                className={styles.loginInput}
                name="password"
                value={loginData.password}
                onChange={changeHandler}
                placeholder="Password"
                type="password"
                autoComplete="current-password"
            />
            <button className={styles.loginButton} type="submit">
                Login
            </button>
        </form>
    );
}
