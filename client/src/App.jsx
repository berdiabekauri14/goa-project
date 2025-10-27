import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup"
import Nav from "./components/Nav"

import img from "./assets/imgs/goa logo.png"
import Login from "./pages/Login"

export default function App() {
  return (
    <>
      <header className=" p-15 bg-green-900 text-white flex justify-center items-center">
        <h1 className=" text-4xl m-5"><b><u>GOA ● Goal oriented academy</u></b></h1>
        <br />
        <img src={img} alt="img" width="100" className=" m-2 rounded-full" />
        <br />
        <Nav />
      </header>
      <center>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/logIn" element={<Login />} />
        </Routes>
      </center>
      <footer className=" p-80 bg-green-900 text-white">
        <center>
          <p className=" -translate-y-50 text-4xl"><b>©2025 <u>Berdia Bekauri</u></b></p>
          <br />
          <p className=" text-5xl text-white">Facebook: <a href="https://www.facebook.com/nika11keshelava" className=" underline">https://www.facebook.com/nika11keshelava</a></p>
        </center>
      </footer>
    </>
  )
}