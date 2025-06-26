import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetBooks from "../services/getBooks";

export default function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            setBook((await GetBooks.searchById(id)).data);
        };

        fetchBook();
    }, [id]);

    useEffect(() => {
        console.log(book);
    }, [book]);

    return (
        <>
            <h2>Book Detail</h2>
            <p>{id}</p>
        </>
    );
}
