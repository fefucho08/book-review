import { useEffect, useState } from "react";
import LoginInput from "../components/Login/LoginInput";
import GetBooks from "../services/getBooks";
import BookCard from "../components/Home/BookCard";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Media } from "../models/Media";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [title, setTitle] = useState("");
    const [data, setData] = useState([]);

    const searchHandler = () => {
        const fetchTitles = async () => {
            try {
                setData((await GetBooks.searchByTitle(title)).data.items);
                setData((prev) => {
                    const filtered = prev.filter(
                        (book) => book.volumeInfo.language === "en"
                    );
                    return filtered.map((book) => new Media(book));
                });
            } catch (err) {
                console.log(err.response.data);
            }
        };

        fetchTitles();
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            <h2>Home</h2>
            <LoginInput
                value={title}
                changeHandler={(e) => setTitle(e.target.value)}
                name="title"
            />
            <button onClick={searchHandler}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <div className={styles.cardsContainer}>
                {data &&
                    data.map((book) => <BookCard book={book} key={book.id} />)}
            </div>
        </>
    );
}
