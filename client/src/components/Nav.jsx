import { Link } from "react-router"

export default function Nav() {
    
    const html = (
        <>
            <Link className=" m-3 text-3xl" to="/profile">Profile</Link>
            <Link className=" m-4 text-3xl"><button className=" bg-white text-green-900 cursor-pointer rounded-4xl w-90 h-13" onClick={() => {
                localStorage.removeItem("Users")
                alert("You have succesfully logged out!")
            }}>Logout</button></Link>
        </>
    )

    return (
        <div className=" bg-green-900 text-white">
            <nav>
                <Link to="/" className=" m-3 text-3xl">Home</Link>
                <Link to="/about" className=" m-3 text-3xl">About</Link>
                <Link to="/courses" className=" m-3 text-3xl">Courses</Link>
                <Link to="/contact" className=" m-3 text-3xl">Contact</Link>
                {
                    !localStorage.getItem("Users") ? <Link to="/signUp" className=" m-4 text-3xl"><button className=" bg-white text-green-900 cursor-pointer rounded-4xl w-90 h-13">Sign Up</button></Link> : html
                }
            </nav>
        </div>
    )
}