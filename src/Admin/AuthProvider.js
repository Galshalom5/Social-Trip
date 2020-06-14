import React, { Component, useState, useEffect } from 'react'
import { auth } from '../index'









export const AuthContext = React.createContext()


export const AuthProvider = ({ children }) => {
    
    const [admin, setAdmin] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(setAdmin)
    }, [])

    return (
        <AuthContext.provider
        value={ {admin} }
        >
        {children}
        </AuthContext.provider>
    )
}

