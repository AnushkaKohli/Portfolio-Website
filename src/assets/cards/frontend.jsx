import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss} from 'react-icons/si';
import './card.css';

const frontend = () => {
  return (
    <div className='content bg-gray-800 border-violet-500 py-8 px-12 rounded-3xl'>
        <h3 className='title font-medium text-center'>
            Frontend Development
        </h3>
        <div className='box flex justify-center gap-x-10'>
            <div className='group grid items-start gap-y-4'>
                <div className='data'>
                    <div className='text-3xl'><FaReact/></div>
                    <div>
                        <h3 className='name'>ReactJS</h3>
                        <span className='level'>Intermediate</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><FaHtml5/></div>
                    <div>
                        <h3 className='name'>HTML5</h3>
                        <span className='level'>Expert</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><FaCss3Alt/></div>
                    <div>
                        <h3 className='name'>CSS</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><RiJavascriptFill/></div>
                    <div>
                        <h3 className='name'>Javascript</h3>
                        <span className='level'>Intermediate</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><TbBrandNextjs/></div>
                    <div>
                        <h3 className='name'>NextJS</h3>
                        <span className='level'>Intermediate</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><FaBootstrap/></div>
                    <div>
                        <h3 className='name'>Bootstrap</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>

                <div className='data'>
                    <div className='text-3xl'><SiTailwindcss/></div>
                    <div>
                        <h3 className='name'>Tailwind</h3>
                        <span className='level'>Advance</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default frontend