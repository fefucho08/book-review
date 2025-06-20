import { useParams } from "react-router-dom";

export default function BookDetail() {
    const { id } = useParams();

    return (
        <>
            <h2>Book Detail</h2>
            <p>{id}</p>
        </>
    );
}
