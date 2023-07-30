import React from 'react';
import about from '../assets/images/about2.png';

const About = () => {
  const info = [
    { text: "Months experience", count: "07" },
    { text: "Completed Projects", count: "09" },
    { text: "Problems Solved", count: "50" }
  ];
  return (
    <section id="about" className="py-10 text-white bg-gray-800 ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-violet-400">Me</span>
        </h3>
        <p className="text-[#EDE4FF] my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a goal-driven individual with an inquisitive mind and a knack for management and leadership. I am currently pursuing my B.Tech in Information Technology (IT) from Heritage Institute of Technology, Kolkata and have completed my 2nd year with a YGPA of 9.47. 
              <br /> <br />
              I am a full stack web developer and I am currently exploring the field of web3 and machine learning. I am also practicing DSA in C++.
              </p>
              <div className="flex mt-10 items-center justify-between gap-10">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-violet-400">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="" download>
              <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 mt-8">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg p-10">
            <img
                src={about}
                alt="me"
                className="w-full object-cover bg-gray-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About