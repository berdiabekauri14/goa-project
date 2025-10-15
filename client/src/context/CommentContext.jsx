/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CommentContext = createContext()

const API_URL = "http://localhost:8008"

export function CommentProvider({ children }) {
    const [comments, setComments] = useState([])

    const returnComments = async () => {
        try {
            const res = await fetch(`${API_URL}/comments`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                }
            })

            if(!res.ok) {
                console.log("Response is not ok");
                return;
            }

            const data = await res.json()

            setComments(data)
        } catch(err) {
            console.log(`Error: ${err}`)
        }
    }

    const createComments = async (commentData) => {
        try {
            const res = await fetch(`${API_URL}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentData)
            })

            if (!res.ok) {
                console.log("Failed to create comment");
                return;
            }

            const data = await res.json()

            setComments(prevComments => [...prevComments, data])
        } catch(err) {
            console.log(`Error: ${err}`)
        }
    }

    return (
        <CommentContext.Provider value={{ returnComments, createComments, comments }}>
            { children }
        </CommentContext.Provider>
    )
}