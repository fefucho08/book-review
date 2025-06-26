import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
    headers: {
        "Content-Type": "application/json",
    },
});
