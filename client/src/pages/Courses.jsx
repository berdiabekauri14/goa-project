import programming from "../assets/imgs/download (1).jpeg"
import mma from "../assets/imgs/download.jpeg"
import gameDev from "../assets/imgs/download (2).jpeg"
import robotics from "../assets/imgs/download (3).jpeg"
import maths from "../assets/imgs/download (4).jpeg"

export default function Courses() {
    return (
        <div>
            <h1 className=" text-6xl m-2"><b>Our Courses</b></h1>
            <br />
            <div className=" flex justify-center m-15">
                <p className=" translate-x-40"><b>Programming: </b></p>
                <br />
                <img src={programming} className=" m-4 translate-y-10 rounded" alt="programming" />
                <br />
                <p className=" translate-x-55"><b>MMA(Martial arts): </b></p>
                <img src={mma} className=" m-4 translate-y-10 rounded" alt="mma" />
                <br />
                <p className=" translate-x-55"><b>Game development: </b></p>
                <img src={gameDev} className=" m-4 translate-y-10 rounded" alt="gameDev" />
                <br />
                <p className=" translate-x-40"><b>Robotics: </b></p>
                <img src={robotics} className=" m-4 translate-y-10 rounded" alt="robotics" />
                <br />
                <p className=" translate-x-40"><b>Maths: </b></p>
                <img src={maths} className=" m-4 translate-y-10 rounded" alt="maths" />
            </div>
        </div>
    )
}