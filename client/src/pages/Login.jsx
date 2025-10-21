import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const { login } = useContext(AuthContext)
    
    return (
        <div>
            <div>
                <h1 className=" text-6xl"><b>Log in</b></h1>
                <br />
                <p className=" text-3xl"><i>Welcome Back!</i></p>
                <br />
                <form action="./Home.jsx" name="form">
                    <input type="email" name="email" className=" border-2 outline-0 p-2 m-2 rounded" placeholder="Enter your email" required />
                    <br />
                    <input type="password" name="password" className=" border-2 outline-0 p-2 m-2 rounded" placeholder="Create a password" required />
                    <br />
                    <button onClick={login} className=" border-2 rounded cursor-pointer p-2 m-3">Submit</button>
                </form>
            </div>
        </div>
    )
}