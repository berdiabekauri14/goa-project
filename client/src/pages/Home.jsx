import video from "../assets/videos/video.mp4"
import img from "../assets/imgs/IMG_0671.PNG"

export default function Home() {
    return (
        <div className="text-center px-4">
            <main className="max-w-7xl mx-auto">
                <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="md:text-left text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                            Welcome to the world of GOA!
                        </h1>
                        <h2 className="mt-6 text-2xl sm:text-3xl text-gray-500 italic">
                            Site made by Berdia Bekauri
                        </h2>
                    </div>
                    <img src={img} alt="img" className="w-full max-w-sm md:max-w-md lg:max-w-lg mt-6 md:mt-0" />
                </div>
                <div className="my-10 flex justify-center">
                    <video src={video} controls className="w-full max-w-3xl rounded shadow-lg" />
                </div>
            </main>
        </div>
    )
}
