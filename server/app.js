const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const mongoose = require("mongoose");
const commentsRouter = require("./routers/comments.router");
const userRouter = require("./routers/users.router");
const authRouter = require("./routers/auth.router");
const globalErrorHandler = require("./controller/error.controller");

const app = express();

dotenv.config();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.use(express.json());

app.use('/comments', commentsRouter);

app.use("/users", userRouter)

app.use("/auth", authRouter)

app.use(globalErrorHandler)

mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log("MongoDB is succsesfully running")
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch(err => console.log(`Error was found in your code: ${err}`))