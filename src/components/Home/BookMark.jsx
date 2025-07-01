import { faBookmark as solid } from "@fortawesome/fontawesome-free-solid";
import { faBookmark as empty } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import styles from "../../styles/Home.module.css";

export default function BookMark({ book }) {
    const { user, updateUser, setUser } = useContext(UserContext);
    const [bookmarked, isBookmarked] = useState(false);

    useEffect(() => {
        if (user.bookmarks) {
            isBookmarked(
                Boolean(
                    user.bookmarks.find((existing) => existing.id === book.id)
                )
            );
        }
    }, [user, book.id]);

    const bookMarkHandler = () => {
        let bookmarks = user.bookmarks;
        if (bookmarked) {
            bookmarks = bookmarks.filter((existing) => existing.id !== book.id);
        } else {
            bookmarks.push(book);
        }
        const newInfo = {
            ...user,
            bookmarks,
        };
        updateUser(user.id, newInfo);
        setUser(newInfo);
    };

    return (
        <button
            type="button"
            className={styles.bookmarkButton}
            onClick={bookMarkHandler}
        >
            <FontAwesomeIcon icon={bookmarked ? solid : empty} />
        </button>
    );
}
