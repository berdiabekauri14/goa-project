import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import img from "../assets/imgs/01c5bcb5-d064-4949-b2cf-55652142334d.png"

export default function Signup() {
    const { signup } = useContext(AuthContext)

    return (
        <div className="m-4">
            <div className="absolute rounded-full bg-green-400 opacity-50 w-[500px] h-[500px] -z-10 right-10 top-[90px]"></div>
            <div className="absolute rounded-full bg-green-400 opacity-50 w-[500px] h-[500px] -z-10 left-10 bottom-[150px]"></div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                <img src={img} alt="img" width="600" className="relative lg:right-4 w-full max-w-md" />
                
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Signup</h1>
                    <p className="text-2xl sm:text-3xl italic mt-2">Welcome!</p>
                    <form action="./Home.jsx" name="form" className="mt-6">
                        <input type="text" name="name" className="border-2 outline-0 p-2 m-2 rounded w-full max-w-xs" placeholder="Enter your name" required />
                        <br />
                        <input type="email" name="email" className="border-2 outline-0 p-2 m-2 rounded w-full max-w-xs" placeholder="Enter your email" required />
                        <br />
                        <input type="password" name="password" className="border-2 outline-0 p-2 m-2 rounded w-full max-w-xs" placeholder="Create a password" required />
                        <br />
                        <input type="password" name="comfPass" className="border-2 outline-0 p-2 m-2 rounded w-full max-w-xs" placeholder="Confirm your password" required />
                        <br />
                        <button onClick={signup} className="border-2 rounded cursor-pointer p-2 m-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
