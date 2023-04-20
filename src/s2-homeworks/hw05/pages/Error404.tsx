import React from 'react'
import s from './Error404.module.css'
import error404 from './404.svg'
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <div id={'hw5-page-404'}>
            <div className={s.wrapper}>
                <img src={error404} alt={'404'} className={s.error404} />
                <div className={s.mainPaige}>
                    <Link to="/">to main</Link>
                </div>
            </div>

        </div>
    )
}

export default Error404
