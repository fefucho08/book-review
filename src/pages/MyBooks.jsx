import { useContext } from "react";
import BookCard from "../components/Home/BookCard";
import UserContext from "../contexts/UserContext";
import styles from "../styles/MyBooks.module.css";

export default function MyBooks() {
    const {
        user: { bookmarks },
    } = useContext(UserContext);

    return (
        <>
            <h2 className={styles.pageTitle}>My Books</h2>
            <div className={styles.cardsContainer}>
                {bookmarks && bookmarks.length > 0 ? (
                    bookmarks.map((book) => (
                        <BookCard book={book} key={book.id} />
                    ))
                ) : (
                    <p
                        style={{
                            textAlign: "center",
                            color: "#888",
                            gridColumn: "1/-1",
                        }}
                    >
                        You have no bookmarked books yet.
                    </p>
                )}
            </div>
        </>
    );
}
