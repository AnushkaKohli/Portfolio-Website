import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";
import project7 from "../assets/images/project7.jpg";
import project8 from "../assets/images/project8.png";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "MediConnect",
      github_link: "https://github.com/ashdude1401/medi-connect-",
      live_link: "https://devfolio.co/projects/medi-connect-3a04",
    },
    {
      img: project2,
      name: "Flow Estate",
      github_link: "https://github.com/rohitranjan-2702/Flow-Hack2023",
      live_link: "https://devfolio.co/projects/flow-estate-52bb",
    },
    {
      img: project3,
      name: "User Authentication Sample",
      github_link: "https://github.com/AnushkaKohli/User-Authentication---Sample-Code-Snippet",
    },
    {
      img: project4,
      name: "TextUtility",
      github_link:"https://github.com/AnushkaKohli/TextUtility",
      live_link: "https://anushkakohli.github.io/",
    },
    {
      img: project5,
      name: "Drum Kit",
      github_link: "https://github.com/AnushkaKohli/Drumkit",
      live_link: "https://anushkakohli.github.io/Drumkit/",
    },
    {
      img: project6,
      name: "Ecommerce",
      github_link: "https://github.com/AnushkaKohli/Ecommerce-ShopSmart",
    },
    {
      img: project7,
      name: "Music Player",
      github_link: "https://github.com/AnushkaKohli/Projects/tree/master/Music%20Player",
    },
    {
      img: project8,
      name: "Inventory Management App",
      github_link: "https://github.com/AnushkaKohli/inventoryManager",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
      <h3 className="text-4xl font-semibold">
          My <span className="text-violet-400">Projects</span>
        </h3>
        <p className="text-[#EDE4FF] mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-full w-full">
          <Swiper
            slidesPerview={2}
            spaceBetween={27}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i} className='pb-12'>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="project" className="rounded-lg" />
                  <h3 className="text-xl my-4 font-sans">{project_info.name}</h3>
                  <div className="flex gap-4 font-sans">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-violet-400 rounded bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    {project_info.live_link && <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-violet-400 rounded bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Project