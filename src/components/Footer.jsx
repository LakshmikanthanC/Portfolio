
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/LakshmikanthanC'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lakshmikanthan-c-951568289/'
    },
    {
<<<<<<< HEAD
      label: 'Leetcode',
      href: 'https://leetcode.com/u/Lakshmikantha_2003/_'
    },
    {
      label: 'Hackrank',
=======
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Lakshmikantha_2003/'
    },
    {
      label: 'Hackranker',
>>>>>>> 153d243499ee073b61bd7731b1af4d49df26b973
      href: 'https://www.hackerrank.com/profile/geelakshmi2003'
    },
    {
      label: 'GreeksForGreeks',
      href: 'https://www.geeksforgeeks.org/user/geelakshexnr/'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">


            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                    Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary
                    href="mailto:geelakshmi2003@gmail.com"
                    label="Start project"
                    icon="chevron_right"
                    classes="reveal-up"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                
                <div>
                        <p className="mb-2 reveal-up">SiteMap</p>

                        <ul>
                            {sitemap.map(({label,href},key)=>(
                                <li key={key}>
                                    <a
                                    href={href}
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}

                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <p className="mb-2 reveal-up">Socials</p>

                        <ul>
                            {socials.map(({label,href},key)=>(
                                <li key={key}>
                                    <a
                                    href={href}
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}

                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            
            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                href="/" 
                className="logo reveal-up"
                >
                    <img
                    src="/Portfolio/images/L.png"
                    width={40}
                    height={40}
                    alt="Logo"
                    />
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy;2024 <span className="text-zinc-200">Lakshmikanthan</span>
                </p>
            </div>



        </div>
    </footer>
  )
}

export default Footer
console.log('Sitemap:', sitemap);
console.log('Socials:', socials);
