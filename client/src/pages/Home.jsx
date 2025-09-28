import { Routes, Route } from "react-router";
import Nav from "../components/Nav";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Signup from "../pages/Signup"
import video from "../assets/videos/video.mp4"
import shadow from "../assets/imgs/black.jpg"

export default function Home() {
    return (
        <div className=" text-center">
            <header className=" p-15 bg-green-900 text-white">
                <h1 className=" text-4xl"><b>GOA ● Goal oriented academy</b></h1>
                <br />
                <Nav />
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
                    <Route path="/client/src/pages/Contact.jsx" element={<Contact />} />
                    <Route path="/client/src/pages/Signup.jsx" element={<Signup />} />
                </Routes>
            </main>
            <br />
            <footer className=" p-80 bg-green-900 text-white">
                <p className=" -translate-y-50 text-9xl"><i>©2025 Berdia Bekauri</i></p>
            </footer>
        </div>
    )
}