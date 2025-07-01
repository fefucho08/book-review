import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY,
    },
});
