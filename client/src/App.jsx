import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events.jsx'; 
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/logansquare',
      element: <LocationEvents index={1} location2="logansquare"/>
    },
    {
      path: '/bucktown',
      element: <LocationEvents index={2} location2="bucktown"/>
    },
    {
      path: '/downtown',
      element: <LocationEvents index={3} location2="downtown"/>
    },
    {
      path: '/wickerpark',
      element: <LocationEvents index={4} location2="wickerpark"/>
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App