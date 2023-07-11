import React from 'react'
import scc from "./styles.module.css"
import mar from "../img/1.jpg"
import { Link } from 'react-router-dom'

const FirstPage = () => {
    return (
        <div >
            <div class={scc.container2}>

                <Link to={'/SecondPage'}> <div className={scc.boxf}><img className={scc.img} src={mar} alt="" /></div></Link>
                <Link to={'/ThirdPage'}> <div className={scc.boxf}><img className={scc.img} src={mar} alt="" /></div></Link>
                <Link to={'/ForthPage'}> <div className={scc.boxf}><img className={scc.img} src={mar} alt="" /></div></Link>
            </div>
        </div>
    )
}

export default FirstPage;