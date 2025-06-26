import { useEffect, useState } from "react";
import LoginInput from "../components/Login/LoginInput";
import CustomButton from "../components/CustomButton";
import GetBooks from "../services/getBooks";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [data, setData] = useState([]);

    const searchHandler = () => {
        const fetchTitles = async () => {
            setData((await GetBooks.searchByTitle(title)).data.items);
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
            <CustomButton text="Search" clickHandler={searchHandler} />
            <ul>
                {data.map((book) => (
                    <li
                        onClick={() => navigate(`/book/${book.id}`)}
                        key={book.id}
                    >
                        {book.volumeInfo.title}
                    </li>
                ))}
            </ul>
        </>
    );
}
