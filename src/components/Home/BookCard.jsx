import { useNavigate } from "react-router-dom";
import styles from "../../styles/Home.module.css";

export default function BookCard({ book }) {
    const nav = useNavigate();

    const thumbnailPlaceHolder = "https://placehold.co/128x200?text=No+cover";

    const shortDescription =
        book.description && book.description.length > 180
            ? book.description.slice(0, 180) + "..."
            : book.description || "No description";

    return (
        <div
            className={styles.bookCard}
            onClick={() => nav(`/book/${book.id}`)}
        >
            <img
                src={
                    book.images.thumbnail
                        ? book.images.thumbnail
                        : thumbnailPlaceHolder
                }
                alt={`${book.title} cover`}
            />
            <div className={styles.bookContent}>
                <h2>
                    {book.title} {book.pubDate ? `(${book.pubDate})` : ""}
                </h2>
                <h3>
                    {book.authors.length > 0
                        ? book.authors.join(", ")
                        : "Unknown authors"}
                </h3>
                <p>{shortDescription}</p>
            </div>
        </div>
    );
}
