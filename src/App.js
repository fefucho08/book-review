import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBooks from "./pages/MyBooks";
import BookDetail from "./pages/BookDetail";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="myBooks" element={<MyBooks />} />
                <Route path="book/:id" element={<BookDetail />} />
            </Route>
        </Routes>
    );
}
