import { useContext, useState } from "react";
import UserContext from "../../src/contexts/UserContext";
import styles from "../styles/MyProfile.module.css";

export default function MyProfile() {
    const { user, updateUser } = useContext(UserContext);
    const [editField, setEditField] = useState(null);
    const [editValue, setEditValue] = useState("");

    if (!user) return <p>Loading...</p>;

    const handleEdit = (field) => {
        setEditField(field);
        setEditValue(user[field]);
    };

    const handleSave = () => {
        const updatedUser = { ...user, [editField]: editValue };
        updateUser(user.id, updatedUser); // ←ここでローカルストレージとContextを更新
        setEditField(null);
    };

    const handleCancel = () => {
        setEditField(null);
        setEditValue("");
    };

    const renderField = (label, field) => (
        <p key={field}>
            <strong>{label}:</strong>{" "}
            {editField === field ? (
                <>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className={styles.input}
                    />
                    <button className={styles.saveButton} onClick={handleSave}>
                        Save
                    </button>
                    <button
                        className={styles.cancelButton}
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    {user[field]}
                    <button
                        className={styles.editButton}
                        onClick={() => handleEdit(field)}
                    >
                        Edit
                    </button>
                </>
            )}
        </p>
    );

    return (
        <div className={styles.profileContainer}>
            <h1 className={styles.welcome}>Welcome, {user.username}!</h1>
            <div className={styles.profileInfo}>
                {renderField("User Name", "username")}
                {renderField("First Name", "firstname")}
                {renderField("Last Name", "lastname")}
                {renderField("Email", "email")}
            </div>
        </div>
    );
}
