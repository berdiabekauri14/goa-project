import { Routes, Route } from "react-router";
import Nav from "../components/Nav";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Signup from "../pages/Signup"

import video from "../assets/videos/video.mp4"
import shadow from "../assets/imgs/black.jpg"
import img from "../assets/imgs/goa logo.png"
import Courses from "./Courses";

export default function Home() {
    return (
        <div className=" text-center">
            <header className=" p-15 bg-green-900 text-white flex justify-center items-center">
                <h1 className=" text-4xl m-5"><b><u>GOA ● Goal oriented academy</u></b></h1>
                <br />
                <Nav />
                <br />
                <img src={img} alt="img" width="100" className=" translate-x-12" />
            </header>
            <br />
            <main>
                <div className=" m-10">
                    <h1 className=" text-3xl"><b>Welcome to GOA!</b></h1>
                    <br />
                    <h2 className=" text-7xl translate-y-20">
                        <i>Site made by 
                        Berdia Bekauri</i>
                    </h2>
                    <img src={shadow} alt="shadow" className=" translate-x-23/12 translate-y-44/35 opacity-75" width="400" />
                    <video src={video} className=" translate-x-201 rounded"></video>
                </div>
                <br />
                <Routes>
                    <Route path="/client/src/pages/About.jsx" element={<About />} />
                    <Route path="/client/src/pages/Courses.jsx" element={<Courses />} />
                    <Route path="/client/src/pages/Contact.jsx" element={<Contact />} />
                    <Route path="/client/src/pages/Signup.jsx" element={<Signup />} />
                </Routes>
            </main>
            <br />
            <footer className=" p-80 bg-green-900 text-white">
                <p className=" -translate-y-50 text-9xl"><b>©2025 <u>Berdia Bekauri</u></b></p>
            </footer>
        </div>
    )
}