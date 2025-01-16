import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className='w-full shadow-2xl'>
        <div className='max-w-[1240px] mx-auto flex items-center p-5 justify-between md:justify-around'>
          <div className='text-[20px] text-[25px] md:text-[29px] font-bold'> Suresh Kumar </div>
          <ul className='hidden md:flex gap-9 text-[21px]'>
            <li ><Link className='hover:border-b-2 border-[#FBFBFB] text-[]' to="/">Home</Link></li>
            <li ><Link className='hover:border-b-2 border-[#FBFBFB] text-[]' to="/skill">Skills</Link></li>
            <li ><Link className='hover:border-b-2 border-[#FBFBFB] text-[]' to="/project">Projects</Link></li>
            <li ><Link className='hover:border-b-2 border-[#FBFBFB] text-[]' to="/contact">Contact</Link></li>
          </ul>
          {

            toggle ?
              <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-3xl duration-100
              cursor-pointer md:hidden block' />
              : <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl duration-100
              cursor-pointer md:hidden block' />
          }
          {/* Responsive */}
          <ul className={`md:hidden bg-gradient-to-r from-red-300 fixed top-[101px] h-screen w-full left-0 duration-500
          ${!toggle ? `left-0` : `left-[-100%]`}`}>
            <li className='border-b-2 border-white p-8 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-yellow-300 
          hover:shadow-2xl'><Link to="/">Home</Link></li>
            <li className='border-b-2 border-white p-8 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-yellow-300 
          hover:shadow-2xl'><Link to="/skill">Skills</Link></li>
            <li className='border-b-2 border-white p-8 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-yellow-300 
          hover:shadow-2xl'><Link to="/project">Projects</Link></li>
            <li className='border-b-2 border-white p-8 font-bold text-[20px] duration-100 hover:bg-gradient-to-r cursor-pointer from-yellow-300 
          hover:shadow-2xl'><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skill' element={<Skills />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>

  )
}

export default App
