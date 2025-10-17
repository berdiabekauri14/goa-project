import video from "../assets/videos/video.mp4"

export default function Home() {
    return (
        <div className=" text-center center">
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
        </div>
    )
}