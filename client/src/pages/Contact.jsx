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
        <div>
            <h1 className=" text-3xl"><b>Contact us</b></h1>
            <br />
            <form name="form">
                <input type="email" name="email" className=" border-2 outline-0 p-2 m-2" placeholder="Enter your email" />
                <br />
                <textarea name="message" className=" border-2 outline-0 p-2 m-2" placeholder="Enter your message"></textarea>
                <br />
                <button onClick={handleFormSubmit} className=" border-2 rounded cursor-pointer">Submit</button>
            </form>
        </div>
    )
}