import { useState } from "react";
import UserContext from "./UserContext";
import User from "../models/User";

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const authUser = (loginData) => {
        const registeredUsers = JSON.parse(localStorage.getItem("users"));
        if (registeredUsers) {
            const userInfo = registeredUsers.find(
                (user) =>
                    user.username === loginData.username &&
                    user.password === loginData.password
            );
            if (userInfo) {
                setUser(new User(userInfo));
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    const updateUser = (id, info) => {
        let registeredUsers = JSON.parse(localStorage.getItem("users"));
        if (registeredUsers) {
            registeredUsers = registeredUsers.filter((user) => user.id !== id);
            registeredUsers.push(info);
            localStorage.setItem("users", JSON.stringify(registeredUsers));
            setUser(info);
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
        <UserContext.Provider
            value={{ user, setUser, authUser, updateUser, createUser }}
        >
            {children}
        </UserContext.Provider>
    );
}
