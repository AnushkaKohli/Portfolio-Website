import React, { useEffect, useState } from 'react';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [sticky, setSticky] = useState(true);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const menuItems = [
    {name: "HOME", link: "#home"},
    {name: "ABOUT", link: "#about"},
    {name: "SKILLS", link: "#skills"},
    {name: "PROJECTS", link: "#projects"},
  ]
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky? "md:bg-white/60 text-gray-900" : "text-white"}`}>
      <div className='flex items-center justify-between'>
        <div className='mx-7'>
          <h4 className='text-3xl uppercase font-bold'>
            Anushka
          </h4>
        </div>

        <div className= {`${sticky? "text-gray-900 md:block hidden px-7 py-2 font-medium bg-white/0 rounded-lg" : "text-gray-900 md:block hidden px-7 py-2 m-5 font-medium bg-white rounded-lg"}`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
            {
              menuItems?.map((menu, i) => (
                <li key={i} className='px-6 hover:text-violet-600'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>

        <div onClick={() => {setHamburgerOpen(!hamburgerOpen)}} className={`${hamburgerOpen? "text-gray-900" : "text-gray-100"} z-[999] text-3xl md:hidden m-5 cursor-pointer`}>
            <IoMenu />
        </div>
        <div className={`${hamburgerOpen? "right-0" : "right-[-100%]"} md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300`}>
            <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            {
              menuItems?.map((menu, i) => (
                <li onClick={() => {setHamburgerOpen(false)}} key={i} className='px-6 hover:text-violet-600'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar