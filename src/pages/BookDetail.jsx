import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetBooks from "../services/getBooks";

export default function BookDetail() {
    const { id } = useParams();

    return (
        <>
            <h2>Book Detail</h2>
            <p>{id}</p>
        </>
    );
}
