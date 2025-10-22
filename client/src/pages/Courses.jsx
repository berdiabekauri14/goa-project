import programming from "../assets/imgs/download (1).jpeg"
import mma from "../assets/imgs/download.jpeg"
import gameDev from "../assets/imgs/download (2).jpeg"
import robotics from "../assets/imgs/download (3).jpeg"
import maths from "../assets/imgs/download (4).jpeg"

export default function Courses() {
    const courses = [
        { title: "Programming", img: programming },
        { title: "MMA (Martial Arts)", img: mma },
        { title: "Game Development", img: gameDev },
        { title: "Robotics", img: robotics },
        { title: "Maths", img: maths },
    ];

    return (
        <div className="px-4 py-10 max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-10">Our Courses</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl p-4">
                        <img 
                            src={course.img} 
                            alt={course.title} 
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold">{course.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
