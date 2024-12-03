import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/Portfolio/images/RIP.png',
      title: 'Rip',
      tags: ['Netwok', 'Protocol', 'OptimalPath'],
      projectLink: 'https://github.com/LakshmikanthanC/RIP'
    },
    {
      imgSrc: '/Portfolio/images/Ems.png',
      title: 'Ems',
      tags: ['tailwind', 'vite'],
      projectLink: 'https://github.com/LakshmikanthanC/ems'
    },
    {
      imgSrc: '/Portfolio/images/Key.png',
      title: 'KeyBoard music',
      tags: ['Html', 'Js'],
      projectLink: 'https://github.com/LakshmikanthanC/Keyboard'
    },
    {
      imgSrc: '/Portfolio/images/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/Portfolio/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/Portfolio/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];


const Work = () => {
  return (
    <section id="work"
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                   <ProjectCard 
                   key={key}
                   imgSrc={imgSrc}
                   title={title}
                   tags={tags}
                   projectLink={projectLink }
                   classes="reveal-up"
                   />
                ))}
            </div>
        </div>
        </section>
  )
}

export default Work;
