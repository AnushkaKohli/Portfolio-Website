import React from 'react';
import hero from '../assets/images/me1.jpg';
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io5';
import { SiDiscord, SiLeetcode } from 'react-icons/si';

const Hero = () => {
  // const socialMedia = [
  //   'logo-github',
  //   'logo-linkedin',
  //   'logo-twitter',
  //   'logo-discord',
  //   'logo-youtube',
  //   'logo-instagram'
  // ]
  return (
    <section id='Home' className='min-h-screen flex pt-10 mt-10 md:flex-row flex-col items-center'>
      <div className='flex-1 flex items-center justify-center h-[650px] p-10'>
        <img src={hero} alt="me" className='md:w-11/12 h-[70%] object-cover m-10 rounded-xl' />
      </div>
      <div className='flex-1 '>
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-violet-400 md:text-6xl text-5xl'>
              Hello!
            </span>
            <br />
            <span className='text-white'>My name is Anushka Kohli</span> 
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-[#EDE4FF]">
            Fullstack Web Developer
          </h4>
          {/* <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 mt-8">Contact Me</button> */}
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
              <a href='https://www.linkedin.com/in/anushka-kohli-9410771b8/' className="text-[#EDE4FF] hover:text-gray-500 cursor-pointer"> <IoLogoLinkedin /> </a> 
              <a href='https://github.com/AnushkaKohli' className="text-[#EDE4FF] hover:text-gray-500 cursor-pointer"> <IoLogoGithub /> </a>
              <a href='https://twitter.com/anuskha_kohli' className="text-[#EDE4FF] hover:text-gray-500 cursor-pointer"> <IoLogoTwitter /> </a>
              <a href='https://discord.com/users/722315150131986594' className="text-[#EDE4FF] hover:text-gray-500 cursor-pointer"> <SiDiscord /> </a>
              <a href='https://leetcode.com/anushka_kohli/' className="text-[#EDE4FF] hover:text-gray-500 cursor-pointer"> <SiLeetcode /> </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero