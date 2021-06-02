module.exports = {
  siteTitle: 'Hello, I\'m Laura!',
  siteDescription: `Hi, I'm Laura. Come see what I can do!`,
  keyWords: ['gatsbyjs', 'react', 'web developer'],
  authorName: 'Laura DiTommaso',
  twitterUsername: 'none',
  githubUsername: 'lmd808',
  authorAvatar: '/images/me.jpeg',
  authorDescription: `Full Stack Developer, and I'm passionate about what I do. I've been writing code since I was 14 years old. Now it is both a hobby and career. More than anything, I love creating work that makes people smile.  
   <br>I currently work as a Lead Full Stack Web Applications developer and mainly work with <strong>Javascript, NodeJS, SQL, MongoDB, and  React.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 90
    },
    {
      name: 'CSS',
      level: 55
    },
    {
      name: 'Javascript',
      level: 80
    },
    {
      name: 'NodeJs',
      level: 45
    },
    {
      name: 'React',
      level: 70
    },
    {
      name: 'Git',
      level: 60
    },
    {
      name: 'SQL',
      level: 55
    },
    {
      name:'MongoDB',
      level: 40
    }
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Phantom Digital",
      begin: {
        month: 'oct',
        year: '2020'
      },
      duration: null,
      occupation: "Lead Web Applications Developer",
      description: "I lead a strong team of developers. I'm responsible for the development and execution of client's sites. I stress communication and innovation. Always making sure the client is content."
  
    },  {
      company: "Mutual Screw and Supply",
      begin: {
        month: 'May',
        year: '2016'
      },
      duration: '1 yr & 5 mos',
      occupation: "Backend SQL developer",
      description: "Employed knowledge of front and back end technologies to design revenue-generating postings while building strong relationships with clients."
      
    }, {
      company: "The Potomac Advocates",
      begin: {
        month: 'Dec',
        year: '2016'
      },
      duration: '6 mos',
      occupation: "Data Analyst",
      description: "Lobbied on behalf of multi-billion dollar organizations on Capitol Hill. Used data analysis and research methods to prepare 30+ page weekly briefs. Cultivated abilities to prepare and communicate important statistical information"    }, 
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Taj Vending Services",
      url: "https://www.tajvending.com/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Festival of the Elves",
      url: "https://www.festivaloftheelves.com/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Brunswick Regional Dental Group",
      url: "https://www.brunswickregionaldentalgroup.com/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "IWG",
      url: "https://www.iwgplc.com/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Barkable: Coming Soon",
      url: null
    },
    {
      image: "/images/awesome-grid.png",
      description: "EcoHabit",
      url: "https://github.com/lmd808/EcoHabit"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/_franciscodf",
    linkedin: "https://www.linkedin.com/in/laura-ditommaso/",
    github: "https://github.com/lmd808",
    email: "laura@lauraditommaso.dev"
  },
  siteUrl: 'https://lauraditommaso.dev',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.png',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: false, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}