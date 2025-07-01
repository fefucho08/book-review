import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function Logout() {
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        setUser(null);
    }, [setUser]);

    return <Navigate to="/login" />;
}
