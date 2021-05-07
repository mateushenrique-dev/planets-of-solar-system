import { useState } from 'react'
import style from './planet.module.scss'

function Planet(props) {

    const infoPlanet = props.infos
    const setDescription = props.description

    function showDescription() {
        const mainSection = props.mainRef.current
        const descriptionSection = mainSection.children[3]
        setDescription(true)
        mainSection.classList.toggle('showingDescription')
        descriptionSection.classList.toggle('active')
    }

    return (
        <div className={style.planet}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg" onClick={showDescription} alt="Planet"/>
                <h1>Uranus</h1>
            </div>
        </div>
    )
}

export default Planet