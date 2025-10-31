import Comments from "../components/Comments";
import img from "../assets/imgs/img.png";
import video from "../assets/videos/video2.mp4"

export default function About() {
    return (
        <div>
            <div>
                <video className=" absolute bottom-15 h-332 -z-1" src={video} autoPlay loop muted></video>
                <div className=" bg-blue-300 text-white border-2 p-4 pr-5 translate-y-55 -translate-x-105 w-300">
                    <h1 className=" text-6xl"><b>About us</b></h1>
                    <center>
                        <img src={img} alt="img" className=" rounded-full m-5" width="500" />
                    </center>
                    <p>GOA(Goal oriented academy) is the best academy in georgia to learn programming, In goa, you can learn how to create websites, programs, apps, games and more. There are more then 2 000 children in goa learning programming. You can also get a job being an programming teacher</p>
                </div>
            </div>
            <br />
            <div className=" m-35 relative top-25">
                <h2 className=" text-2xl"><b><i>Give us comments about this academy</i></b></h2>
                <Comments />
            </div>
        </div>
    )
}