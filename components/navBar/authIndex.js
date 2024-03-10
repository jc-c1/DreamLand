import React from 'react';
import Auth from '../user/auth';
import navAuth from './navAuth';
import NavBarBot from './Bot/navBarBot';
import { useAuthState } from "react-firebase-hooks/auth"

export const AuthIndex = () => {
    const user = getAuth()
    
    return (user ? <NavBarBot /> : <Auth />);
}