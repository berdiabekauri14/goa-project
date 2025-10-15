import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}