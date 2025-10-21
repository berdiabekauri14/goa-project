import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Nav() {
    const { user, logout } = useContext(AuthContext);

    const authLinks = (
        <>
            <Link to="/signUp" className="m-4 text-3xl">
                <button className="bg-white text-green-900 cursor-pointer rounded-4xl w-90 h-13">
                    Sign Up
                </button>
            </Link>
            <Link to="/logIn" className="m-4 text-3xl underline">Log In</Link>
        </>
    );

    return (
        <div className="bg-green-900 text-white flex justify-center items-center p-15">
            <nav>
                <Link to="/" className="m-3 text-3xl underline">Home</Link>
                <Link to="/about" className="m-3 text-3xl">About</Link>
                <Link to="/courses" className="m-3 text-3xl">Courses</Link>
                <Link to="/contact" className="m-3 text-3xl">Contact</Link>
                {
                    !user ? authLinks : (
                        <button onClick={logout} className="m-4 text-3xl bg-white text-green-900 cursor-pointer rounded-4xl w-90 h-13">
                            Logout
                        </button>
                    )
                }
            </nav>
        </div>
    );
}
