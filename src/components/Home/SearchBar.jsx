import { useState } from "react";
import GetBooks from "../../services/getBooks";
import { Book, Magazine, VOLUME_TYPES } from "../../models/Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import styles from "../../styles/Home.module.css";
import SearchFilter from "./SearchFilter";

export default function SearchBar({ setData, isLoading }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchFilters, setSearchFilter] = useState({
        filter: "title",
        printType: "all",
    });

    const fetchTitles = async () => {
        isLoading(true);
        try {
            const response = await (
                await GetBooks.list(
                    searchTerm,
                    searchFilters.filter,
                    searchFilters.printType
                )
            ).data;
            if (response.totalItems > 0) {
                setData(response.items);
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
            } else setData([]);
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
        isLoading(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") fetchTitles();
    };

    return (
        <>
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
            <SearchFilter
                searchFilters={searchFilters}
                setSearchFilters={setSearchFilter}
            />
        </>
    );
}
