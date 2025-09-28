export default function Signup() {
    const database = []

    const handleFormSubmit = e => {
        const name = e.target.form.name.value;
        const email = e.target.form.email.value;
        const password = e.target.form.password.value;
        const comfPass = e.target.form.comfPass.value;

        if (!name || !email || !password) {
            alert("Please enter in all fields");
            return;
        }

        if (comfPass !== password) {
            alert("Your comfirmed password isn't the same");
            return;
        }

        database.push({
            Name: name,
            Email: email,
            Password: password
        })

        localStorage.setItem("Users", JSON.stringify(database))

        alert("You have signed in!")
    }
    
    return (
        <div>
            <div>
                <h1 className=" text-3xl"><b>Signup</b></h1>
                <br />
                <form action="./Home.jsx" name="form">
                    <input type="text" name="name" className=" border-2 outline-0 p-2 m-2" placeholder="Enter your name" />
                    <br />
                    <input type="email" name="email" className=" border-2 outline-0 p-2 m-2" placeholder="Enter your email" />
                    <br />
                    <input type="password" name="password" className=" border-2 outline-0 p-2 m-2" placeholder="Create a password" />
                    <br />
                    <input type="password" name="comfPass" className=" border-2 outline-0 p-2 m-2" placeholder="Confirm your password" />
                    <br />
                    <button onClick={handleFormSubmit} className=" border-2 rounded cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    )
}