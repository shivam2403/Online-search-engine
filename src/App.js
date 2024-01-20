import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouteLinks from './components/RouteLinks';

const App = () => {
    const [darkTheme,setDarkTheme]=useState(false);

  return (
    <div className={darkTheme?'dark':''}>
        <div className='bg-gray-100 dark:bg-gray-900 black min-h-screen text-black dark:text-white'>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <RouteLinks/>
            <Footer/>
        </div>
    </div>
  )
}

export default App