import styles from "../../styles/Home.module.css";

export default function SearchFilter({ searchFilters, setSearchFilters }) {
    const changeHandler = (e) => {
        setSearchFilters((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    return (
        <div className={styles.searchFiltersContainer}>
            <select
                value={searchFilters.filter}
                name="filter"
                onChange={changeHandler}
            >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="publisher">Publisher</option>
            </select>

            <select
                value={searchFilters.printType}
                name="printType"
                onChange={changeHandler}
            >
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
        </div>
    );
}
