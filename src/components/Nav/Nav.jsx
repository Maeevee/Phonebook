import React from 'react'
// import { nav } from '../../helpers/nav'
import { NavLink } from 'react-router-dom'
// import LogoutBtn from '../LogoutBtn/LogoutBtn'
import { useAuth } from '../../hooks/useAuth'
import UserMenu from '../UserManu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import styles from './Nav.module.css'

const Nav = () => {

    const {isLogedin} = useAuth()

    return (
        <div 
        className={styles.container}
        >
        <NavLink 
        className={styles.header} 
        to="/">contact_book</NavLink>
        <p 
        className={styles.text}
        >Welcome to our application where you can store and organise all your contacts. To get started, please register or, if you are already registered, log in, and you will have the ability to create a list of your contacts and securely store them on our server.</p>
        {isLogedin && <NavLink to="/phonebook">Phonebook</NavLink>}
            {isLogedin ? <UserMenu/> : <AuthNav/>}
        <p 
        className={styles.copyright}
        >©2023 Maeevee</p>
        </div>
    )
}

export default Nav
