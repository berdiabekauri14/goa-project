import video from "../assets/videos/video.mp4"
import img from "../assets/imgs/IMG_0671.PNG"

export default function Home() {
    return (
        <div className=" text-center center">
            <br />
            <main>
                <div className=" m-10 flex justify-center items-center">
                    <div>
                        <h1 className=" text-7xl text-left"><b>Welcome to the world of GOA!</b></h1>
                        <br />
                        <h2 className=" text-5xl translate-y-20 text-gray-500 text-left">
                            <i>Site made by Berdia Bekauri</i>
                        </h2>
                    </div>
                    <br />
                    <img src={img} alt="img" width="500" className=" m-4 translate-y-12 translate-x-8" />
                </div>
                <br />
                    <center>
                        <video src={video} className=" m-25 rounded"></video>
                    </center>
            </main>
        </div>
    )
}