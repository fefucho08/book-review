import { useState } from "react";
import GetBooks from "../../services/getBooks";
import { Book, Magazine, VOLUME_TYPES } from "../../models/Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import styles from "../../styles/Home.module.css";

export default function SearchBar({ setData }) {
    const [searchTerm, setSearchTerm] = useState("");

    const fetchTitles = async () => {
        try {
            const response = await (
                await GetBooks.searchByTitle(searchTerm)
            ).data;
            if (response.totalItems > 0) {
                setData((await GetBooks.searchByTitle(searchTerm)).data.items);
                setData((prev) => {
                    const filtered = prev.filter(
                        (media) => media.volumeInfo.language === "en"
                    );
                    return filtered.map((media) => {
                        if (media.volumeInfo.printType === VOLUME_TYPES.BOOK)
                            return new Book(media);
                        else return new Magazine(media);
                    });
                });
            }
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") fetchTitles();
    };

    return (
        <div className={styles.searchBarContainer}>
            <input
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                onKeyDown={handleKeyDown}
            />
            <button
                type="button"
                className={styles.searchButton}
                onClick={fetchTitles}
            >
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}
