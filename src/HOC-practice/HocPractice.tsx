import React from "react";
import s from './HocPractice.module.css'


const componentWithDate = (IncomingComponent: any) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()

    return () => {
        return <div className={s.container}>
        <IncomingComponent />
            {day+'.'+month+'.'+year}
        </div>
    }
}

const Hello = () => {
    return <span>
        <h3>Hello, it's </h3>
    </span>
}

export default componentWithDate(Hello)