const AppError = require("../utils/appError")

const comments = [
    { id: 1, comment: "This acadamy is very good! great job!"},
    { id: 2, comment: "I want to learn too!" },
    { id: 3, comment: "The best academy in georgia!" }
]

const getComments = (req, res) => {
    res.json(comments)
}

const getComment = (req, res) => {
    const commentId = parseInt(req.params.id)
    const Comment = comments.find(el => el === commentId * 1)

    if (Comment) {
        res.json(Comment)
    } else {
        return new AppError("Comment wasn't found", 404)
    }
}

const createComment = (req, res) => {
    const { comment } = req.body;

    if (!comment) {
        return new AppError("Comment is required to be filled", 403);
    }

    const newComment = {
        id: comments[comments.length + 1],
        comment
    }

    comments.push(newComment)

    res.status(201).json(comments)
}

const deleteComment = (req, res) => {
    const { id } = req.params
    const Comment = comments.findIndex(el => el === id * 1)

    if (id === -1) {
        return new AppError("Comment wasn't found", 404)
    }

    comments.splice(Comment, 1)

    res.status(204).json(comments)
}

const updateComment = (req, res) => {
    const { id } = req.params

    const { comment } = req.params

    const Comment = comments.find(el => el === id * 1)

    if (!Comment) {
        return new AppError("Comment wasn't found", 404)
    }

    if (comment) Comment.comment = comment
    
    res.json(comments)

}

module.exports = { getComments, getComment, createComment, deleteComment, updateComment }