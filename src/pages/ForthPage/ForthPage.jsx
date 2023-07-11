import React from 'react'
import { Link } from 'react-router-dom'
import vel from "../img/2.jpg"
import scc from "./styles.module.css"

const ForthPage = () => {
    return (
        <div>

            <Link to={'/'}> <div className={scc.box}><img className={scc.img} src={`https://i.redd.it/62wp5avdx3y21.jpg`} alt="" /></div></Link>
            <p>
            В 2010 году стартовал мультсериал «Мстители. Величайшие герои Земли». В нём команда появилась в своём оригинальном составе: Железный человек, Тор, Халк, Человек-муравей и Оса. Позже к ним присоединились Капитан Америка, Чёрная пантера и Соколиный глаз, а во втором сезоне — Мисс Марвел и Вижн.
            </p>
        </div>
    )
}

export default ForthPage