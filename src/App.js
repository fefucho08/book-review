import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBooks from "./pages/MyBooks";
import BookDetail from "./pages/BookDetail";
import ProtectedPage from "./pages/ProtectedPage";
import UserProvider from "./contexts/UserProvider";
import Register from "./pages/Register";

export default function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <ProtectedPage>
                                <Home />
                            </ProtectedPage>
                        }
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route
                        path="myBooks"
                        element={
                            <ProtectedPage>
                                <MyBooks />
                            </ProtectedPage>
                        }
                    />
                    <Route
                        path="book/:id"
                        element={
                            <ProtectedPage>
                                <BookDetail />
                            </ProtectedPage>
                        }
                    />
                </Route>
            </Routes>
        </UserProvider>
    );
}
