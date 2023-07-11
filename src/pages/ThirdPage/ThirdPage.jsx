import React from 'react'
import { Link } from 'react-router-dom'
import vel from "../img/2.jpg"
import scs from "./styles.module.css"

const ThirdPage = () => {
    return (
        <div>
            <Link to={'/'}> <div className={scs.box}><img className={scs.img} src={`https://w0.peakpx.com/wallpaper/685/789/HD-wallpaper-captain-america-avengers-cool-dslr-infinity-war-marvel-shield-snapserd.jpg`} alt="" /></div></Link>

            <p>
                Мстители, прозванные впоследствии «Самыми могучими героями Земли», первоначально состояли из Человека-муравья, Осы, Тора, Железного человека и Халка. Однако с самого начала в составе команды стали происходить изменения: Халк вскоре покинул Мстителей[1], и к ним присоединился Капитан Америка[2]. Изменяющийся состав стал визитной карточкой команды, хотя некоторое постоянство всё-таки сохранялось: Мстители сражались с такими врагами, одолеть которых в одиночку не мог ни один супергерой — так появилась фирменная фраза: «Мстители, общий сбор!» (англ. Avengers Assemble!). За всё время существования команды в ней побывали люди, мутанты, роботы, боги, пришельцы, сверхъестественные существа и даже бывшие злодеи.
            </p>
        </div>
    )
}

export default ThirdPage