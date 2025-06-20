import CustomButton from "../CustomButton";
import LoginInput from "./LoginInput";

export default function LoginForm({ loginData, setLoginData }) {
    const changeHandler = (e) => {
        setLoginData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const loginHandler = (e) => {
        e.preventDefault();
        console.log("Loggin in");
    };

    return (
        <form onSubmit={loginHandler}>
            <LoginInput
                value={loginData.username}
                changeHandler={changeHandler}
                name={"username"}
            />
            <LoginInput
                type="password"
                value={loginData.password}
                changeHandler={changeHandler}
                name={"password"}
            />
            <CustomButton clickHandler={() => {}} text="Login" />
        </form>
    );
}
