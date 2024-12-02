 

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP,ScrollTrigger);


import ReviewCard from "./ReviewCard"; 

 const reviews = [
    {
      content: 'web devloper Internship in prodigy Infotech',
      name: 'Prodigy Infotech',
      imgSrc: '/images/prodigy.jpg',
      company: 'Prodigy Infotect'
    },
    {
      content: 'Overview of MongoDB fundamentals, from the document model to CRUD operations to indexing.',
      name: 'Mongo DB',
      imgSrc: '/images/mongo.png',
      company: 'Certifition'
    },
    {
      content: 'Rmk symposium i have practiacte in tech event in rmk' ,
      name: 'ohm\'s odessy',
      imgSrc: '/images/idea.png',
      company: 'Symposium'
    },
    {
      content: 'I have done Cybersecurity inj coursera.',
      name: 'Courseera',
      imgSrc: '/images/coursera.png',
      company: 'Certifition'
    },
    {
      content: 'Python with Data Science in GreatLearning',
      name: 'GreatLearning',
      imgSrc: '/images/greatlearning.png',
      company: 'Certifition'
    },
    {
      content: 'Fontend developer in GreatLearning',
      name: 'GreatLearning',
      imgSrc: '/images/greatlearning.png',
      company: 'Certifition'
    }
  ];

const Review = () => {

  useGSAP(()=>{
    gsap.to('.scrube-slide',{
      scrollTrigger:{
        trigger:'.scrube-slide',
        start:'-200% 80%',
        end:'400% 80%',
        scrub:true
        
      },
      x:'-1000'
    })
  });

  return (
    <section
    id="reviews"
    className="section overflow-hidden"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
            Achivements and Certifition
            </h2>

            <div className="scrube-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content,name,imgSrc,company},
                    key)=>(<ReviewCard 
                    key={key}
                    name={name}
                    imgSrc={imgSrc}
                    company={company}
                    content={content}
                    />)
                )}

            </div>
        </div>
    </section>
  )
}

export default Review
