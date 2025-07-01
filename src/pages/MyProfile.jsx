import { useContext } from "react";
import UserContext from "../../src/contexts/UserContext";
import styles from "../styles/MyProfile.module.css";

export default function MyProfile() {
    const { user } = useContext(UserContext);

    return (
        <div className={styles.profileContainer}>
            <h1 className={styles.welcome}>Welcome, {user.username}!</h1>
            <div className={styles.profileInfo}>
                <p>
                    <strong>User Name:</strong> {user.username}
                </p>
                <p>
                    <strong>First Name:</strong> {user.firstname}
                </p>
                <p>
                    <strong>Last Name:</strong> {user.lastname}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
            </div>
        </div>
    );
}
