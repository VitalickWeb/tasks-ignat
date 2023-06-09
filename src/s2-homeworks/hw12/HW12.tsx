import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

export type themesType = {
    id: number
    value: string
}

const themes: themesType[] = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector((state: AppStoreType) => state.theme.themeId)

    let dispatch = useDispatch()

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    let selectClass
    switch (themeId) {
        case 1:
            selectClass = s.select
            break
        case 2:
            selectClass = s.selectBlue
            break
        case 3:
            selectClass = s.selectDark
            break
        default:
            selectClass = s.select
    }

    return (
        <div id={'hw12'}>
            <div className={s2.hw}>

                {themeId === 3
                    ? <div id={'hw12-text'} className={s2.hwTitleDark}>
                        Homework #12
                    </div>
                    : <div id={'hw12-text'} className={s2.hwTitle}>
                        Homework #12
                    </div>}

                <div className={s2.lineTop}></div>

                <div className={s.selectBlock}>
                    <div className={s.subTitleBox}>
                        <span className={s.subTitle}>Выберете тему</span>
                    </div>

                    <SuperSelect
                        id={'hw12-select-theme'}
                        className={selectClass}
                        // сделать переключение тем
                        value={themeId}
                        onChange={(e) => change(+e.currentTarget.value)}
                        options={themes.map((theme) => ({
                            id: theme.id,
                            value: theme.value,
                        }))}
                    />

                </div>
            </div>
        </div>
    )
}

export default HW12
