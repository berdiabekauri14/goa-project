import img from "../assets/imgs/IMG_0673.PNG"

export default function Contact() {
    
    const handleFormSubmit = e => {
        const email = e.target.form.email.value;
        const message = e.target.form.message.value;

        if (!email || !message) {
            alert("All inputs must be filled");
            return;
        }

        const database = {
            Email: email,
            Message: message
        }

        localStorage.setItem("Messages", JSON.stringify(database))

        alert("Form was submitted!");
    }

    return (
        <div className=" flex justify-center items-center">
            <div>
                <h1 className=" text-6xl"><b>Contact us</b></h1>
                <br />
                <p className=" text-3xl"><i>Send us a message if you want to!</i></p>
                <br />
                <form name="form">
                    <input type="email" name="email" className=" border-2 outline-0 p-2 m-2 rounded" placeholder="Enter your email" />
                    <br />
                    <textarea name="message" className=" border-2 outline-0 p-2 m-2 rounded" placeholder="Enter your message"></textarea>
                    <br />
                    <button onClick={handleFormSubmit} className=" border-2 rounded cursor-pointer p-2 m-3">Submit</button>
                </form>
            </div>
            <img src={img} alt="img" width="500" />
        </div>
    )
}