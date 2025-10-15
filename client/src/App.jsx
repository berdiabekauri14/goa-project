import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Nav from "./components/Nav"

export default function App() {
  return (
    <>
      <Nav />
      <center>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </center>
      <footer className=" p-80 bg-green-900 text-white">
        <p className=" -translate-y-50 text-9xl"><b>©2025 <u>Berdia Bekauri</u></b></p>
      </footer>
    </>
  )
}