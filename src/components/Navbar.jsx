import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

const Navbar = ({darkTheme,setDarkTheme}) => {

  return (
    <div className={`p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200`}>
        <div className='flex justify-between items-center space-x-5 w-screen'>
          <Link to='/'>
            <p className={`text-2xl bg-blue-500 text-white dark:bg-gray-500 dark:text-gray-900 font-bold py-1 px-2 rounded`}>
              Google 🔎
            </p>
          </Link>
          <button type='button' onClick={()=>setDarkTheme(!darkTheme)} className='text-xl bg-gray-800 text-white dark:text-black dark:bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
            {darkTheme ? "Light 💡" : "Dark 🌙"}
          </button>
        </div>
          <Search/>
    </div>
  )
}

export default Navbar