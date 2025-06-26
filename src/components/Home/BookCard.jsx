import { useNavigate } from "react-router-dom";
import styles from "../../styles/Home.module.css";

export default function BookCard({ book }) {
    const nav = useNavigate();

    return (
        <div
            className={styles.bookCard}
            onClick={() => nav(`/book/${book.id}`)}
        >
            <h2>{book.title}</h2>
            <p>{book.authors ? book.authors.join(", ") : "Unknown authors"}</p>
        </div>
    );
}
