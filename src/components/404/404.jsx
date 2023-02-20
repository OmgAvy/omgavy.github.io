import React from 'react'
import { Link } from 'react-router-dom'
import './404.css'

const Page404 = () => {
    return (
        <div className='page__404'>
            <h1>404</h1>
            <h5>Page Not Found!</h5>
            <h6>This site can't provide content on this url.</h6>
            <Link to="/" className='btn btn-primary'>Back to Home</Link>
        </div>
    )
}

export default Page404