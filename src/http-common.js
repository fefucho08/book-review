import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com",
    headers: {
        "Content-Type": "application/json",
    },
});
