import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";

export default function Header() {
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
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
