const AppError = require("../utils/appError")
const Comment = require("../models/comments.model")
const catchAsync = require("../utils/catchAsync")

const getComments = catchAsync(async (req, res, next) => {
    const comments = await Comment.find()

    res.json(comments)
})

const getComment = catchAsync(async (req, res, next) => {
    const comment = await Comment.findById(req.params.id)

    if (comment) {
        res.json(comment)
    } else {
        return next(new AppError("Comment not found", 404))
    }
})

const createComment = catchAsync(async (req, res, next) => {
    const { content } = req.body;

    if (!content) {
        return next(new AppError("Comment is required to be filled", 403))
    }

    const newComment = await Comment.create({
        content
    })

    res.status(201).json(newComment)
})

const deleteComment = catchAsync(async (req, res, next) => {
    const comment = Comment.findbyIdAndDelete(req.params.id)

    if (!comment) {
        return next(new AppError("Comment not found", 404))
    }

    res.send(`Comment ${comment} is deleted!`)
})

const updateComment = catchAsync(async (req, res, next) => {
    const comment = Comment.findById(req.params.id)
    
    const { content } = req.body

    if (!content) {
        return next(new AppError("Comment not found", 404))
    }

    if(content) cOmment.content = content

    res.json(comment)
})

module.exports = { getComments, getComment, createComment, deleteComment, updateComment }