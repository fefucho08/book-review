import { useState } from "react";
import BookCard from "../components/Home/BookCard";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/Home/SearchBar";

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(false);

    return (
        <>
            <h2 className={styles.pageTitle}>Home</h2>
            <SearchBar setData={setData} isLoading={isLoading} />
            <div className={styles.cardsContainer}>
                {loading && <p>Loading...</p>}
                {data &&
                    !loading &&
                    data.map((book) => <BookCard book={book} key={book.id} />)}
            </div>
        </>
    );
}
