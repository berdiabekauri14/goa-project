const AppError = require("../utils/appError")
const Comment = require("../models/comments.model")
const catchAsync = require("../utils/catchAsync")

const getComments = catchAsync(async (req, res, next) => {
    const comments = await Comment.find();

    res.status(200).json(comments);
});

const getComment = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const comment = await Comment.findById(id)

    if(!comment){
        return next(new AppError('Comment not found', 404));
    }

    res.status(200).json(comment);
});

const createComment = catchAsync(async (req, res, next) => {
    const { content } = req.body;

    const newComment = await Comment.create({
        content
    });

    res.status(201).json(newComment)
});

const deleteComment = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const comment = await Comment.findById(id)

    if (!comment) {
        return next(new AppError("Comment not found", 404))
    }

    await Comment.findByIdAndDelete(id);

    res.send(`Comment ${comment} is deleted!`)
});

const updateComment = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { content } = req.body;

    const comment = await Comment.findById(id)

    if (!comment) {
        return next(new AppError("Comment not found", 404))
    }

    if(content) comment.content = content;

    await comment.save();

    res.status(200).json(comment)
});

module.exports = { getComments, getComment, createComment, deleteComment, updateComment };