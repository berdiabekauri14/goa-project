const express = require("express")

const commentsRouter = express.Router()

const  { getComments, getComment, createComment, deleteComment, updateComment } = require("../controller/comments.controller.js")

commentsRouter
    .route("/")
    .get(getComments)
    .post(createComment)

commentsRouter
    .route("/:id")
    .get(getComment)
    .delete(deleteComment)
    .patch(updateComment)

module.exports = commentsRouter