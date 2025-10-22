import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import img from "../assets/imgs/01c5bcb5-d064-4949-b2cf-55652142334d.png"

export default function Login() {
    const { login } = useContext(AuthContext)

    return (
        <div className="relative overflow-hidden m-4">
            <div className="absolute rounded-full bg-green-400 opacity-50 w-[500px] h-[500px] -z-10 right-10 top-[150px]"></div>
            <div className="absolute rounded-full bg-green-400 opacity-50 w-[500px] h-[500px] -z-10 left-10 bottom-[100px]"></div>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 relative z-10">
                <img src={img} alt="img" width="600" className="relative lg:right-4 w-full max-w-md" />
                
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Log in</h1>
                    <p className="text-2xl sm:text-3xl italic mt-2">Welcome Back!</p>
                    <form name="form" className="mt-6">
                        <input type="email" name="email" className="border-2 outline-0 p-2 m-2 rounded w-full max-w-xs" placeholder="Enter your email" required />
                        <br />
                        <input type="password" name="password" className="border-2 outline-0 p-2 m-2 rounded w-full max-w-xs" placeholder="Create a password" required />
                        <br />
                        <button onClick={login} className="border-2 rounded cursor-pointer p-2 m-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
