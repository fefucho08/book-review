import { useState } from "react";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const updateUser = (id, info) => {
        let registeredUsers = JSON.parse(localStorage.getItem("users"));
        if (registeredUsers) {
            registeredUsers = registeredUsers.filter((user) => user.id !== id);
            registeredUsers.push(info);
            localStorage.setItem("users", JSON.stringify(registeredUsers));
        }
    };

    const createUser = (user) => {
        let registeredUsers = JSON.parse(localStorage.getItem("users"));
        if (registeredUsers) {
            if (
                registeredUsers.find(
                    (existing) => user.username === existing.username
                )
            ) {
                return false;
            } else {
                registeredUsers.push(user);
                localStorage.setItem("users", JSON.stringify(registeredUsers));
                return true;
            }
        } else {
            localStorage.setItem("users", JSON.stringify([user]));
            return true;
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, updateUser, createUser }}>
            {children}
        </UserContext.Provider>
    );
}
