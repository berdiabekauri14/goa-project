const comments = require("../data/comments..data.js")

const getComments = (req, res) => {
    res.json(comments)
}

const getComment = (req, res) => {
    const commentId = parseInt(req.params.id)
    const Comment = comments.find(el => el === commentId * 1)

    if (Comment) {
        res.json(Comment)
    } else {
        res.status(404).json({
            status: "fail",
            message: "Comment not found"
        })
    }
}

const createComment = (req, res) => {
    const { comment } = req.body;

    if (!comment) {
        res.status(403).json({
            status: "something missing",
            message: "Comment is required"
        })
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
        res.status(404).json({
            status: "fail",
            message: "Comment not found"
        })
    }

    comments.splice(Comment, 1)

    res.status(204).json(comments)
}

const updateComment = (req, res) => {
    const { id } = req.params

    const { comment } = req.params

    const Comment = comments.find(el => el === id * 1)

    if (!Comment) {
        res.status(404).json({
            status: "fail",
            message: "Comment not found"
        })
    }

    if (comment) Comment.comment = comment

    res.json(comments)

}

module.exports = { getComments, getComment, createComment, deleteComment, updateComment }