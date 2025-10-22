import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Nav() {
    const { user, logout } = useContext(AuthContext);

    const authLinks = (
        <>
            <Link to="/signUp" className="text-lg sm:text-xl lg:text-2xl">
                <button className="bg-white text-green-900 px-4 py-2 rounded-2xl hover:bg-gray-100 transition cursor-pointer">
                    Sign Up
                </button>
            </Link>
            <Link to="/logIn" className="text-lg sm:text-xl lg:text-2xl underline hover:text-gray-300 transition">
                Log In
            </Link>
        </>
    );

    return (
        <div className="bg-green-900 text-white px-4 py-6">
            <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
                <Link to="/" className="text-lg sm:text-xl lg:text-2xl underline hover:text-gray-300 transition">
                    Home
                </Link>
                <Link to="/about" className="text-lg sm:text-xl lg:text-2xl hover:text-gray-300 transition">
                    About
                </Link>
                <Link to="/courses" className="text-lg sm:text-xl lg:text-2xl hover:text-gray-300 transition">
                    Courses
                </Link>
                <Link to="/contact" className="text-lg sm:text-xl lg:text-2xl hover:text-gray-300 transition">
                    Contact
                </Link>
                {
                    !user ? authLinks : (
                        <button onClick={logout} className="bg-white text-green-900 px-4 py-2 rounded-2xl text-lg sm:text-xl lg:text-2xl hover:bg-gray-100 transition cursor-pointer">
                            Logout
                        </button>
                    )
                }
            </nav>
        </div>
    );
}
