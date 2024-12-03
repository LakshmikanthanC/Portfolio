import React from 'react'

import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/Portfolio/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/Portfolio/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/Portfolio/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/Portfolio/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/Portfolio/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/Portfolio/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/Portfolio/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/Portfolio/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ]; 

const Skill  = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
            Essential Tools I use

            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.

            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc},key) =>
                    (
                        <SkillCard 
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default  Skill
