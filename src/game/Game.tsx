import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './Game.module.css'

export const Game = () => {

    const [clicked, setClicked] = useState(false)
    const [tryNum, setTryNum] = useState(0)
    const [inputValue, setInputValue] = useState('')

    let buttonClassName = !clicked ? s.button : `${s.button} ${s.showNumber}`

    const onNumberClickHandler = () => {
        setTryNum(tryNum + 1)
        setClicked(true)
        setTimeout(() => setClicked(false), 450)
    }

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputValue === '765') {
                setClicked(true)
                alert('Congratulations! You guessed right!' )
            } else {
                setTryNum(tryNum + 1)
                alert('Bad luck! Try again')
            }
        }
    }


    return <div className={s.gameBody}>
        <h3>My first game</h3>
        <h6>*not finished yet</h6>
        <div>
            <button className={buttonClassName} onClick={onNumberClickHandler}>784</button>
            <button className={buttonClassName} onClick={onNumberClickHandler}>765</button>
            <button className={buttonClassName} onClick={onNumberClickHandler}>987</button>
            <br/>
            <button className={buttonClassName} onClick={onNumberClickHandler}>675</button>
            <button className={buttonClassName} onClick={onNumberClickHandler}>677</button>
            <button className={buttonClassName} onClick={onNumberClickHandler}>726</button>
            <br/>
            <button className={buttonClassName} onClick={onNumberClickHandler}>765</button>
            <button className={buttonClassName} onClick={onNumberClickHandler}>762</button>
            <button className={buttonClassName} onClick={onNumberClickHandler}>757</button>
            <br/>
            <br/>
            Enter number which is written twice
            <br/>
            <input onChange={onInputChangeHandler} onKeyPress={onEnterPressHandler}/>
            <br/>
            Количество попыток: {tryNum}
            <br/>

        </div>
    </div>
}