import styles from "../styles/Index.module.css";

export default function CustomButton({ text, clickHandler }) {
    return (
        <button onClick={clickHandler} className={styles.customButton}>
            {text}
        </button>
    );
}
