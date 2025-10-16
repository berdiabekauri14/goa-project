import { useContext, useState } from "react";
import { CommentContext } from "../context/CommentContext";

export default function Comments() {
    const { comments, addComment } = useContext(CommentContext) || {};
    const [comment, setComment] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim()) {
            try {
                await addComment({ text: comment })

                setResult(comment);
                setComment("");
            } catch (err) {
                setResult("Failed to add comment.");
                console.log(`Error: ${err}`)
            }
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
            {result !== null && (
                <div className="mt-4 p-2 border rounded bg-gray-100">
                    <strong>Result:</strong> {result}
                </div>
            )}
            {Array.isArray(comments) && comments.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-bold mb-2">Comments:</h3>
                    <ul>
                        {comments.map((c, idx) => (
                            <li key={idx} className="border-b py-1">{c.text || c}</li> 
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
