import React from 'react'
import logo from '../assets/TaskBoard-Logo.png'

const Navbar = ({ currentTab, setCurrentTab }) => {
  return (
    <nav className='flex justify-between items-center bg-blue-900 text-white py-3.5 px-6 sm:px-12 shadow-md'>
      <div className="logo cursor-pointer flex items-center gap-2.5" onClick={() => setCurrentTab('home')}>
        <img src={logo} alt="TaskBoard Logo" className="h-10 w-auto scale-150 origin-left object-contain" />
        <span className='font-bold text-xl tracking-wide text-amber-50'>TaskBoard</span>
      </div>
      <ul className="flex gap-6 sm:gap-8 text-sm sm:text-base font-medium text-blue-100">
        <li
          onClick={() => setCurrentTab('home')}
          className={`cursor-pointer transition-all ${currentTab === 'home' ? 'text-white font-bold border-b-2 border-amber-300 pb-0.5' : 'hover:text-white'
            }`}
        >
          Home
        </li>
        <li
          onClick={() => setCurrentTab('tasks')}
          className={`cursor-pointer transition-all ${currentTab === 'tasks' ? 'text-white font-bold border-b-2 border-amber-300 pb-0.5' : 'hover:text-white'
            }`}
        >
          Your Tasks
        </li>
      </ul>
    </nav>
  )
}

export default Navbar