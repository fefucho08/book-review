import styles from "../../styles/Login.module.css";

export default function LoginInput({
    type = "text",
    value,
    changeHandler,
    name,
}) {
    return (
        <input
            type={type}
            value={value}
            onChange={changeHandler}
            name={name}
            placeholder={"Enter " + name}
            className={styles.loginInput}
        />
    );
}
