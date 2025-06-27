import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetBooks from "../services/getBooks";

export default function BookDetail() {
    const { id } = useParams();
    //State to save the book data
    const [bookData, setBookData] = useState(null);
    //State to set error message
    const [errorMessage, setErrorMessage] = useState("");
    //state to show loading or not loading

    useEffect(() => {
        //Define an asynchronous function
        const fetchBookDetail = async () => {
            try {
                const response = await GetBooks.getById(id);
                const bookInfo = response.data;
                setBookData(bookInfo);
            } catch (error) {
                console.error(error);
                setErrorMessage("fail");
            }
        };

        fetchBookDetail();
    }, [id]);

    //Loading message
    if (!bookData) {
        return (
            <div>
                <h2>Book Detail</h2>
                <p>Loading Data...</p>
            </div>
        );
    }
    //when error

    if (errorMessage !== "") {
        return (
            <div>
                <h2>Book Detail</h2>
                <p>{errorMessage}</p>
            </div>
        );
    }
    //Display information
    return (
        <>
            <h2>Book Detail</h2>
            <p>title: {bookData.volumeInfo.title}</p>
            <p>
                Author:{" "}
                {bookData.volumeInfo.authors
                    ? bookData.volumeInfo.authors.join(", ")
                    : "not found"}
            </p>
            <p>Publisher: {bookData.volumeInfo.publisher}</p>
            <p>Publish date: {bookData.volumeInfo.publishedDate}</p>
            <p>Page: {bookData.volumeInfo.pageCount}</p>
            <p>
                Category:{" "}
                {bookData.volumeInfo.categories
                    ? bookData.volumeInfo.categories.join(", ")
                    : "not found"}
            </p>
            <p>Description:</p>
            <p>{bookData.volumeInfo.description}</p>
            {bookData.volumeInfo.imageLinks &&
                bookData.volumeInfo.imageLinks.thumbnail && (
                    <img
                        src={bookData.volumeInfo.imageLinks.thumbnail}
                        alt="Book Cover"
                    />
                )}
            {bookData.volumeInfo.previewLink && (
                <p>
                    <a
                        href={bookData.volumeInfo.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Preview
                    </a>
                </p>
            )}
        </>
    );
}
