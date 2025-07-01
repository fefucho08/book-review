import { useNavigate } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import BookMark from "./BookMark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";

export default function BookCard({ book }) {
    const nav = useNavigate();

    const thumbnailPlaceHolder = "https://placehold.co/128x200?text=No+cover";

    const shortDescription =
        book.description && book.description.length > 180
            ? book.description.slice(0, 180) + "..."
            : book.description || "No description";

    return (
        <div className={styles.bookCard}>
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
                <div className={styles.bookActions}>
                    <BookMark book={book} />
                    <button
                        type="button"
                        onClick={() => nav(`/book/${book.id}`)}
                        className={styles.seeMore}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </button>
                </div>
            </div>
        </div>
    );
}
