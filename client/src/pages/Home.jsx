import video from "../assets/videos/video.mp4"
import img from "../assets/imgs/goa logo.png"

export default function Home() {
    return (
        <div className=" text-center center">
            <header className=" p-15 bg-green-900 text-white flex justify-center items-center">
                <h1 className=" text-4xl m-5"><b><u>GOA ● Goal oriented academy</u></b></h1>
                <br />
                <img src={img} alt="img" width="100" className=" translate-x-8 m-2 rounded" />
                <br />
            </header>
            <br />
            <main>
                <div className=" m-10">
                    <h1 className=" text-7xl"><b>Welcome to the world of GOA!</b></h1>
                    <br />
                    <h2 className=" text-5xl translate-y-20">
                        <i>Site made by Berdia Bekauri</i>
                    </h2>
                    <br />
                    <center>
                        <video src={video} className=" m-25 rounded"></video>
                    </center>
                </div>
            </main>
            <br />
            <footer className=" p-80 bg-green-900 text-white">
                <p className=" -translate-y-50 text-9xl"><b>©2025 <u>Berdia Bekauri</u></b></p>
            </footer>
        </div>
    )
}