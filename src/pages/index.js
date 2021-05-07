import Particles, { tsParticles } from 'react-particles-js'
import Slide from '../components/slide'
import axios from 'axios'

export default function Home(props) {
  return (
    <div>
     <Slide props={props} />
      <Particles
        params={{
          "background": {
            "color": {
              "value": "#000"
            },
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "20%"
          },
          "fullScreen": {
            "enable": true,
            "zIndex": -1
          },
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble"
              }
            },
            "modes": {
              "bubble": {
                "distance": 250,
                "duration": 2,
                "opacity": 0,
                "size": 0
              },
              "grab": {
                "distance": 400
              },
              "repulse": {
                "distance": 400
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "links": {
              "color": {
                "value": "transparent"
              },
              "distance": 150,
              "opacity": 0.4
            },
            "move": {
              "attract": {
                "rotate": {
                  "x": 600,
                  "y": 600
                }
              },
              "enable": true,
              "path": {},
              "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              },
              "random": true,
              "speed": 1
            },
            "number": {
              "density": {
                "enable": true
              },
              "value": 160
            },
            "opacity": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 0,
                "max": 1
              },
              "animation": {
                "enable": true,
                "speed": 1
              }
            },
            "size": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 1,
                "max": 3
              },
              "animation": {
                "speed": 4,
                "minimumValue": 0.3
              }
            }
          }
        }}
      />
    </div>
  )
}

export async function getStaticProps() {
 return (
    axios.get('https://api.le-systeme-solaire.net/rest/bodies')
    .then((response) => {

      const planets = response.data.bodies.filter(
        body => 
          (body.isPlanet === true) &&
          (body.id !== 'ceres' && body.id !== 'eris' && body.id !== 'haumea' && body.id !== 'makemake' && body.id !== 'pluton')
      )

      return {
        props: {
          planets,
          imagePlanets: 
            [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg', 
            'https://solarsystem.nasa.gov/system/downloadable_items/810_PIA01492.jpg', 
            'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg', 
            'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg', 
            'https://solarsystem.nasa.gov/system/downloadable_items/2986_earthturn_600.gif', 
            'https://upload.wikimedia.org/wikipedia/commons/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg'
            ]
        }
      }
    })
    .catch((error) => {
      console.log(error)
    })
 )
}