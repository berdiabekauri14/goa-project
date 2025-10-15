import { useContext, useState } from "react";
import { CommentContext } from "../context/CommentContext";

export default function Comments() {
    const context = useContext(CommentContext);
    const comments = Array.isArray(context?.comments) ? context.comments : [];
    const createComments = typeof context?.createComments === "function" ? context.createComments : () => {};

    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            createComments(comment);
            setComment("");
        }
    };

    return (
        <div className="m-3">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="comment"
                    placeholder="Create a comment"
                    className="outline-0 border-2 p-2 rounded m-2"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    autoComplete="off"
                />
                <br />
                <button type="submit" className="border-2 p-2 rounded cursor-pointer m-2">
                    Submit
                </button>
            </form>
            <ol>
                {comments.map((cmt, idx) => (
                    <li key={idx}>{typeof cmt === "string" ? cmt : JSON.stringify(cmt)}</li>
                ))}
            </ol>
        </div>
    );
}