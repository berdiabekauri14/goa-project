/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const AuthContext = createContext()

const API_URL = "https://localhost:8008"

export function AuthProvider({ children }) {
    const [user, setUser] = useState([])

    const signup = async (formObj) => {
        try {
            const res = await fetch(`${API_URL}/auth/signUp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formObj)
            });

            console.log(res)

            const data = await res.json();

            if (!res.ok){
                throw new Error(data.message)
            }

            setUser(data)

            alert(data.message);
        } catch(err) {
            console.log(err);
        }
    }

    const login = async (formObj) => {
        try {
            const res = await fetch(`${API_URL}/auth/logIn`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formObj),
                credentials: "include"
            });

            const result = await res.json();

            if(!res.ok) {
                throw new Error(result.message);
            };

            setUser(result)

            setUser(result.data.user);
        } catch(err) {
            alert(err.message)
        }
    }

    const logout = async () => {
        setUser(null)
        alert("You have succesfully logged out")
    }
    
    return (
        <AuthContext.Provider value={{ signup, login, logout, user }}>
            { children }
        </AuthContext.Provider>
    )
}