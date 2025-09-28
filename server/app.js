const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")

const app = express()

const { commentsRouter } = require("./routers/comments.router.js")

dotenv.config()

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.use(express.json())

app.use("/comments", commentsRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env}`)
})