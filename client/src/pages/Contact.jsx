import img from "../assets/imgs/IMG_0673.PNG";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        email: "",
        message: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = e => {
        e.preventDefault();

        const { email, message } = formData;

        if (!email || !message) {
            alert("Please fill out both fields.");
            return;
        }

        localStorage.setItem("Messages", JSON.stringify({ Email: email, Message: message }));

        alert("Form was submitted!");
        setFormData({ email: "", message: "" });
    };

    return (
        <div className="px-4 py-12 bg-white max-w-7xl mx-auto">
            <div className="absolute rounded-full bg-blue-400 opacity-30 w-[300px] h-[300px] -z-10 right-10 top-[100px] "></div>
            <div className="absolute rounded-full bg-blue-400 opacity-30 w-[300px] h-[300px] -z-10 left-10 top-[650px] "></div>
            <div className="flex flex-col lg:flex-row items-center gap-12 relative left-25">
                <div className="w-full max-w-xl">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg sm:text-2xl italic mb-8">Send us a message!</p>
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="border-2 p-3 rounded outline-none" placeholder="Enter your email" required />
                        <textarea name="message" value={formData.message} onChange={handleChange} className="border-2 p-3 rounded outline-none resize-none h-32" placeholder="Enter your message" required></textarea>
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition cursor-pointer">Submit</button>
                    </form>
                </div>
                <div className="w-full max-w-md">
                    <img src={img} alt="Contact Illustration" className="w-full h-auto rounded" />
                </div>
            </div>
        </div>
    );
}
