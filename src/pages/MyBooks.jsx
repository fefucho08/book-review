import { useEffect, useState } from "react";
import GetBooks from "../services/getBooks";
import { Book } from "../models/Media";
import BookCard from "../components/Home/BookCard";

export default function MyBooks() {
    const [bookmarks, setBookmarks] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));

    useEffect(() => {
        const fetchBookmarks = async () => {
            const books = [];
            for (const id of userInfo.bookmarks) {
                try {
                    const response = await GetBooks.getById(id);
                    books.push(new Book(response.data));
                    await new Promise((resolve) => setTimeout(resolve, 200)); // add 200ms delay between requests
                } catch (error) {
                    console.error(`Failed to fetch book with id ${id}:`, error);
                }
            }
            setBookmarks(books);
        };
        if (userInfo?.bookmarks?.length) {
            fetchBookmarks();
        }
    }, []);

    useEffect(() => {
        console.log(bookmarks);
    }, [bookmarks]);

    return (
        <>
            <h2>My Books</h2>
            <div className="cardsContainer">
                {bookmarks &&
                    bookmarks.map((book) => (
                        <BookCard book={book} key={book.id} />
                    ))}
            </div>
        </>
    );
}

// localStorage {
// username: blabla,
// password: 123,
// bookmarks: [id, id, id]
// }
