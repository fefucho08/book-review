import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <header>
            <nav className={styles.navbar}>
                <h1>📚 Book App</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/myBooks">My Books</Link>
                    </li>
                    <li>
                        <Link to={user ? "/logout" : "/login"}>
                            {user ? "Logout" : "Login"}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
