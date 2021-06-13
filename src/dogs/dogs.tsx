import React, {useState} from "react"
import s from './dogs.module.css'
import {getHoundPic, getHoundSubList} from "./api";

export const Dogs = () => {

    const [dog, setDog] = useState('')
    const [list, setList] = useState([])

    getHoundPic().then(data => setDog(data[3]))
    getHoundSubList().then(data => setList(data))

    return (
        <div>
            <div className={s.houndContainer}>

                <div>
                    <h2>Hound</h2>

                    <img className={s.dogPicture1}
                         src={dog}
                         alt='dog'/>
                </div>

                <div>
                    <h2>List of hound sub-breeds</h2>
                    <ul>
                        {list.map(dog => <li>{dog}</li>)}
                    </ul>
                </div>

            </div>
        </div>
    )
}