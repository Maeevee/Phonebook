import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperations";


const LogoutBtn = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }
    return (
        <button onClick={handleClick} type='button'>
            Logout
        </button>
    )
}

export default LogoutBtn
