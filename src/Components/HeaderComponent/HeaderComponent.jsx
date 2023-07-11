import React from 'react'
import scc from "./styles.module.css"
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header className={scc}>
                <h1>Here is logo</h1>
                <h2>Home </h2>
                <h2>About us</h2>
                <h2>Contact</h2>
                <h2>News</h2>
                <h2>Services</h2>
            </header>
        </div>
    )
}

export default HeaderComponent