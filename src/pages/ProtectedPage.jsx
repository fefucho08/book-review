import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedPage({ children }) {
    const { user } = useContext(UserContext);

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}
