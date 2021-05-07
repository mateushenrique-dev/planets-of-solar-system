import React, { useState } from 'react'
import Planet from '../planet'
import style from './slide.module.scss'

function Slide(props) {

  const planets = props.props.planets
  const PlanetRef = React.createRef()
  const MainRef = React.createRef()
  const [ description, setDescription ] = useState(false)
  const imagePlanets = props.props.imagePlanets
  let [index, setIndex] = useState(0)

  function Next() {
    if(index < 7) {
      setIndex(index += 1)
      const planet = PlanetRef.current.children[0].children[0]
      const ImagePlanet = planet.children[0]
      const NamePlanet = planet.children[1]
      planet.classList.add('right')
      setTimeout(() => {
        planet.classList.remove('right')
      }, 500)
      NamePlanet.innerText = planets[index].englishName
      ImagePlanet.setAttribute('src', imagePlanets[index])
    }
  }

  function Prev() {
    if(index > 0) {
      setIndex(index -= 1)
      const planet = PlanetRef.current.children[0].children[0]
      const ImagePlanet = planet.children[0]
      const NamePlanet = planet.children[1]
      planet.classList.add('left')
      setTimeout(() => {
        planet.classList.remove('left')
      }, 500)
      NamePlanet.innerText = planets[index].englishName
      ImagePlanet.setAttribute('src', imagePlanets[index])
    }
  }

  return (
    <main className={style.slide} ref={MainRef}>
      <div className="prev"><img src="/arrow.svg" alt="Prev" onClick={Prev}/></div>
      <div ref={PlanetRef}>
        <Planet description={setDescription} mainRef={MainRef} />
      </div>
      <div className="next"><img src="/arrow.svg" alt="Next" onClick={Next}/></div>
      <section className={style.planetDescription}>
        <p>Density: {description ? planets[index].density : ''} </p>
        <p>Discovered by: {description ? planets[index].discoveredBy : ''} </p>
        <p>Discovery date: {description ? planets[index].discoveryDate : ''} </p>
        <p>Eccentricity: {description ? planets[index].eccentricity : ''} </p>
        <p>Equa Radius: {description ? planets[index].equaRadius : ''} </p>
        <p>Escape: {description ? planets[index].escape : ''} </p>
        <p>Flattening: {description ? planets[index].flattening : ''} </p>
        <p>Mass: {description ? planets[index].mass.massValue : ''} </p>
        <p>Mass exponente: {description ? planets[index].mass.massExponent : ''} </p>
        <p>Inclination: {description ? planets[index].inclination : ''} </p>
        <p>Gravity: {description ? planets[index].gravity : ''} </p>
        <p>Moons: {description ? planets[index].moons?.length : ''} </p>
        <p>Sideral orbit: {description ? planets[index].sideralOrbit : ''} </p>
        <p>Volumn: {description ? planets[index].vol.volValue : ''} </p>
        <p>Volumn exponent: {description ? planets[index].vol.volExponent : ''} </p>
      </section>
    </main>
  )


}
export default Slide