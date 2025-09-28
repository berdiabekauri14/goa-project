import Comments from "../components/Comments";
import img from "../assets/imgs/img.png";
import shadow from "../assets/imgs/black.jpg"

export default function About() {
    return (
        <div>
            <h1 className=" text-8xl translate-y-23/12"><b>About us</b></h1>
            <div className=" m-3">
                <img src={shadow} alt="shadow" className=" translate-x-23/13 translate-y-38/35 opacity-75" width="425" />
                <img src={img} alt="img" className=" translate-x-190 m-4 rounded" width="500" />
            </div>
            <br />
            <p>GOA(Goal oriented academy) is the best academy in georgia to learn programming, In goa, you can learn how to create websites, programs, apps, games and more. There are more then 2 000 children in goa learning programming. You can also get a job being an programming teacher</p>
            <h2 className=" text-2xl"><b><i>Comments from this academy</i></b></h2>
            <Comments />
        </div>
    )
}