import React from 'react';
import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiPostman, SiCplusplus, SiC, SiSolidity } from 'react-icons/si';
import './card.css';

const language = () => {
  return (
    <div className='content bg-gray-800 border-violet-500 py-8 px-12 rounded-3xl'>
        <h3 className='title font-medium text-center'>
            Languages and Tools
        </h3>
        <div className='box flex justify-center gap-x-10'>
            <div className='group grid items-start gap-y-4'>
                <div className='data'>
                    <div className='text-3xl'><SiC/></div>
                    <div>
                        <h3 className='name'>C</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><SiCplusplus/></div>
                    <div>
                        <h3 className='name'>C++</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><FaJava/></div>
                    <div>
                        <h3 className='name'>Java</h3>
                        <span className='level'>Intermediate</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><FaPython/></div>
                    <div>
                        <h3 className='name'>Python</h3>
                        <span className='level'>Beginner</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><SiSolidity/></div>
                    <div>
                        <h3 className='name'>Solidity</h3>
                        <span className='level'>Beginner</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><FaGitAlt/></div>
                    <div>
                        <h3 className='name'>Git</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><SiPostman/></div>
                    <div>
                        <h3 className='name'>Postman</h3>
                        <span className='level'>Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default language