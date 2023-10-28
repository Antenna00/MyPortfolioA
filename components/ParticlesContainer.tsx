import React, { useCallback } from 'react'
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';


function ParticlesContainer() {
  // init
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, [])
  //loaded
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles className='xl:w-[65%] w-full right-0 h-full absolute' id='tsparticles' init={particlesInit} 
    options={{
      fullScreen: {enable: false},
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          }
        }
      },
      particles: {
        color: {
          value: '#e68e2e'
        },
        links: {
          color: '#f5d393',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000
          },
          value: 80,
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5},
        },
      },
      detectRetina: true,
    }} />
  )
}

export default ParticlesContainer