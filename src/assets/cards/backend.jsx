import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiFirebase } from 'react-icons/si';
import './card.css';


const backend = () => {
  return (
    <div className='content bg-gray-800 border-violet-500 py-8 px-12 rounded-3xl'>
        <h3 className='title font-medium text-center'>
            Backend Development
        </h3>
        <div className='box flex justify-center gap-x-10'>
            <div className='group grid items-start gap-y-4'>
                <div className='data'>
                    <div className='text-3xl'><FaNodeJs/></div>
                    <div>
                        <h3 className='name'>NodeJS</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><SiMongodb/></div>
                    <div>
                        <h3 className='name'>MongoDB</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><SiMysql/></div>
                    <div>
                        <h3 className='name'>MySQL</h3>
                        <span className='level'>Intermediate</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><SiExpress/></div>
                    <div>
                        <h3 className='name'>Express</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><SiFirebase/></div>
                    <div>
                        <h3 className='name'>Firebase</h3>
                        <span className='level'>Beginner</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default backend