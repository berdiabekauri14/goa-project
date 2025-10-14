export default function Profile() {
    return (
        <div>
            <h1 className=" text-6xl"><b>Profile</b></h1>
            <br />
            <h2 className=" text-3xl"><i>Here is your data:</i></h2>
            <br />
            <p className=" text-2xl">{localStorage.getItem("Users")}</p>
        </div>
    )
}