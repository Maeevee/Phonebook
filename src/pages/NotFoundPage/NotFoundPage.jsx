import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            <img alt='not found'/>
            <Link to='/'>To home</Link>
        </div>
    )
}

export default NotFoundPage
