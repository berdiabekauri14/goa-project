import { Link } from "react-router"

export default function Nav() {
    return (
        <div className=" bg-green-900 text-white">
            <nav>
                <Link to="/client/src/pages/Home.jsx" className=" m-3 text-3xl">Home</Link>
                <Link to="/client/src/pages/About.jsx" className=" m-3 text-3xl">About</Link>
                <Link to="/client/src/pages/Courses.jsx" className=" m-3 text-3xl">Courses</Link>
                <Link to="/client/src/pages/Contact.jsx" className=" m-3 text-3xl">Contact</Link>
                <Link to="/client/src/pages/Signup.jsx" className=" m-4 text-3xl"><button className=" bg-white text-green-900 cursor-pointer rounded-4xl w-90 h-13">Sign Up</button></Link>
            </nav>
        </div>
    )
}