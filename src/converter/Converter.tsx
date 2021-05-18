import React, {ChangeEvent, useState} from "react";
import s from "./Converter.module.css"
export const Converter = () => {

    const [celValue, setCelValue] = useState(0)
    const [fahValue, setFahValue] = useState(32)

    const onChangeCelHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const val = +e.currentTarget.value
        setCelValue(val)
        setFahValue(Math.round((val * 9 / 5) + 32))
    }

    const onChangeFahHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const val = +e.currentTarget.value
        setFahValue(val)
        setCelValue(Math.round((val - 32) * 5 / 9))
    }

    const verdictClassName = celValue < 100 ? s.verdict : `${s.verdict} ${s.verdictRed}`

    return <div>
        ____Celsius: <input value={celValue}
                        type='number'
                        onChange={onChangeCelHandler}/>
        <br/>
        Fahrenheit: <input value={fahValue}
                           type='number'
                           onChange={onChangeFahHandler}/>
                           <div className={verdictClassName}>____{celValue >= 100 ? '__water would be boiled__' : 'water would not be boiled'}____</div>
    </div>
}


export const Right = () => {
    return <h2>Hello</h2>
}