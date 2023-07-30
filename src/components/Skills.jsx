import React from 'react';
import Frontend from '../assets/cards/frontend';
import Backend from '../assets/cards/backend';
import Language from '../assets/cards/language';

const Skills = () => {
  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-violet-400">Skills</span>
        </h3>
        <p className="text-[#EDE4FF] mt-3 text-lg">My knowledge</p>
        <div className='grid grid-cols-3 gap-x-12 justify-center my-7 mx-10'>
          <Frontend />
          <Backend />
          <Language />
        </div>
      </div>
    </section>
  )
}

export default Skills