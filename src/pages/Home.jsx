import { useContext, useEffect, useState } from "react";
import BookCard from "../components/Home/BookCard";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/Home/SearchBar";
import UserContext from "../contexts/UserContext";

export default function Home() {
    const [data, setData] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <>
            <h2 className={styles.pageTitle}>Home</h2>
            <SearchBar setData={setData} />
            <div className={styles.cardsContainer}>
                {data &&
                    data.map((book) => <BookCard book={book} key={book.id} />)}
            </div>
        </>
    );
}
