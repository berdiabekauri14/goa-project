const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const mongoose = require("mongoose")

const app = express()

const commentsRouter = require("./routers/comments.router.js")

dotenv.config()

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.use(express.json())

app.use("/comments", commentsRouter)

mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log("MongoDB is succsesfully running")
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch(err => console.log(`Error was found in your code: ${err}`))