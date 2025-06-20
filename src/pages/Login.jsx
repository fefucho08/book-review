import { useEffect, useState } from "react";
import LoginInput from "../components/Login/LoginInput";
import CustomButton from "../components/CustomButton";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
    const [loginData, setLoginData] = useState({ username: "", password: "" });

    return (
        <>
            <h2>Login</h2>
            <LoginForm loginData={loginData} setLoginData={setLoginData} />
        </>
    );
}
