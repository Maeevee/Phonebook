import React from 'react'
import { nav } from '../../helpers/nav'
import { NavLink } from 'react-router-dom'
import LogoutBtn from '../LogoutBtn/LogoutBtn'
import { useAuth } from '../../hooks/useAuth'
import UserMenu from '../UserManu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'

const Nav = () => {

    const {isLogedin} = useAuth()

    return (
        <>
        <NavLink to="/">Home</NavLink>
        {isLogedin && <NavLink to="/phonebook">Phonebook</NavLink>}
            {isLogedin ? <UserMenu/> : <AuthNav/>}

        </>
    )
}

export default Nav
