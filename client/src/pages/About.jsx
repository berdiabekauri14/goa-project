import Comments from "../components/Comments";
import img from "../assets/imgs/img.png";

export default function About() {
    return (
        <div>
            <h1 className=" text-6xl"><b>About us</b></h1>
            <center>
                <img src={img} alt="img" className=" rounded-full m-5" width="500" />
            </center>
            <br />
            <p className=" m-2">Facebook to our page: <a href="https://www.facebook.com/nika11keshelava?locale=ka_GE" className=" underline text-blue-400">https://www.facebook.com/nika11keshelava?locale=ka_GE</a></p>
            <br />
            <p>GOA(Goal oriented academy) is the best academy in georgia to learn programming, In goa, you can learn how to create websites, programs, apps, games and more. There are more then 2 000 children in goa learning programming. You can also get a job being an programming teacher</p>
            <h2 className=" text-2xl"><b><i>Top comments from this academy</i></b></h2>
            <Comments />
        </div>
    )
}