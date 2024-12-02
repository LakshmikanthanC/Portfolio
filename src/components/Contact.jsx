import React from 'react'

const socialLinks = [
    {
      href: 'https://github.com/LakshmikanthanC',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
      </svg>,
      alt: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/lakshmikanthan-c-951568289/',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
      </svg>,
      alt: 'LinkedIn'
    },
    {
      href: 'https://leetcode.com/u/Lakshmikantha_2003/',
      icon: <svg fill="currentColor" width="25" height="25" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Leetcode</title><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/></svg>,
      alt: 'Leetcode'
    },
    {
      href: 'https://www.hackerrank.com/profile/geelakshmi2003',
      icon: <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 582 486.999"><path d="M-1-1h582v402H-1z" fill="none"/><title>HackerRank</title><path d="M454.843 141.001c-13.019-22.417-172.832-115-198.859-115-26.019 0-185.895 92.351-198.84 115-12.947 22.649-13.019 207.358 0 230.009 13.018 22.639 172.839 114.989 198.84 114.989 26 0 185.841-92.466 198.851-114.999 13.007-22.533 13.016-207.583.008-229.999zM309.862 398.15c-3.559 0-36.756-32.137-34.141-34.762.781-.78 5.625-1.328 15.768-1.644 0-23.564.53-61.622.844-77.553.038-1.814-.395-3.081-.395-5.256h-71.812c0 6.379-.412 32.523 1.232 65.479.205 4.078-1.42 5.353-5.158 5.335-9.102-.025-18.211-.099-27.321-.071-3.683.009-5.274-1.374-5.157-5.488.826-30.043 2.66-75.488-.134-191.07v-2.849c-8.688-.314-14.717-.862-15.508-1.652-2.624-2.624 31.032-34.76 34.581-34.76 3.558 0 36.989 32.145 34.383 34.76-.782.781-7.098 1.338-15.067 1.652v2.84c-2.174 23.135-1.823 71.506-2.362 94.686h72.107c0-4.089.351-31.212-1.077-75.145-.091-3.047.853-4.646 3.781-4.672 9.945-.072 19.9-.117 29.855-.055 3.108.019 4.105 1.546 4.043 4.834-3.28 171.861-.594 159.867-.594 188.975 7.97.315 15.112.864 15.895 1.655 2.588 2.615-30.205 34.761-33.763 34.761z" fill="currentColor"/></svg>,
      alt: 'Hackrank'
    },
  ];


const Contact = () => {
  return (
    <section 
    id="contact"
    className="section"
    >
        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">

            <div className="mb-12 lg:mb-0lg:flex lg:flex-col">
                <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
                   Contact me for collaboration 
                </h2>

                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
                        Reach out today to discuss your project needs and start collaborating on something amazing!
                    </p>

                <div className="flex items-center gap-2 mt-auto">
                {socialLinks.map(({href,icon},key)=>(
                    <a 
                    key={key}
                    href={href}
                    target="_blank"
                    className="w-12 h-12 grid place-items-center ring-inset ing-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
                    >
                        {icon}
                    </a>
                ))}
            </div>
            </div>

            <form 
            action="https://getform.io/f/bgddnypa"
            method="POST"
            className="xl:pl-10 2xl:pl-20"
            >
                <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                    <div className="mb-4">
                        <label 
                        htmlFor="name"
                        className="label reveal-up"
                        >
                          Name  

                        </label>
                        <input type="text" 
                        name="name" 
                        id="name" 
                        autoComplete="name"
                        required
                        placeholder="Lakshmikanthan C"
                        className="text-field reveal-up" 
                        />

                    </div>

                    <div className="mb-4">
                        <label 
                        htmlFor="email"
                        className="label reveal-up"
                        >
                          Email   

                        </label>
                        <input type="email" 
                        name="email" 
                        id="email" 
                        autoComplete="email"
                        required
                        placeholder="Lakshmi@example.com"
                        className="text-field reveal-up" 
                        />

                    </div>

                    </div>


                    <div className="mb-4">
                        <label
                        htmlFor="message"
                        className="label reveal-up"
                        >
                        Message

                        </label>

                        <textarea 
                        name="message"
                        id="message" 
                        placeholder="Hi!"
                        required
                        className="text-field resize-y min-h-32 max-h-80 reveal-up"
                        ></textarea>


                    </div>

                    <button 
                    type="submit"
                    className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"

                    >
                        Submit
                    </button>
     
            </form>

        </div>


    </section>
  )
}

export default Contact
