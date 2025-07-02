import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetBooks from "../services/getBooks";
import { Book, Magazine, VOLUME_TYPES } from "../models/Media";
import styles from "../styles/Detail.module.css";
import BookMark from "../components/Home/BookMark";

export default function BookDetail() {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchBookDetail = async () => {
            try {
                const response = await GetBooks.getById(id);
                const bookInfo = response.data;
                bookInfo.volumeInfo.printType === VOLUME_TYPES.BOOK
                    ? setBookData(new Book(bookInfo))
                    : setBookData(new Magazine(bookInfo));
            } catch (error) {
                console.error(error);
                setErrorMessage("Failed to load book data.");
            }
        };

        fetchBookDetail();
    }, [id]);

    if (!bookData && errorMessage === "") {
        return (
            <div className={styles.detailContainer}>
                <h2 className={styles.mainTitle}>Book Detail</h2>
                <p className={styles.loading}>Loading book information...</p>
            </div>
        );
    }

    if (errorMessage !== "") {
        return (
            <div className={styles.detailContainer}>
                <h2 className={styles.mainTitle}>Book Detail</h2>
                <p className={styles.error}>{errorMessage}</p>
            </div>
        );
    }

    return (
        <div className={styles.detailContainer}>
            <h2 className={styles.mainTitle}>{bookData.title}</h2>
            <div className={styles.content}>
                {bookData.images?.thumbnail && (
                    <img
                        className={styles.thumbnail}
                        src={bookData.images.thumbnail}
                        alt="Book Cover"
                    />
                )}
                <div className={styles.info}>
                    <p>
                        <strong>Author:</strong>{" "}
                        {bookData.authors?.join(", ") || "Unknown"}
                    </p>
                    <p>
                        <strong>Publisher:</strong> {bookData.publisher}
                    </p>
                    <p>
                        <strong>Published:</strong> {bookData.pubDate}
                    </p>
                    <p>
                        <strong>Pages:</strong> {bookData.pageCount}
                    </p>
                    <p>
                        <strong>Categories:</strong>{" "}
                        {bookData.categories?.join(", ") || "None"}
                    </p>
                    <p>
                        <strong>Description:</strong>
                    </p>
                    <p className={styles.description}>{bookData.description}</p>
                    {bookData.link && (
                        <a
                            className={styles.previewLink}
                            href={bookData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🔗 Open Preview
                        </a>
                    )}
                    <BookMark book={bookData} />
                </div>
            </div>
        </div>
    );
}
