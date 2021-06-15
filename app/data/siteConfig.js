module.exports = {
  siteTitle: 'Hello, I\'m Laura!',
  siteDescription: `Hi, I'm Laura. Come see what I can do!`,
  keyWords: ['gatsbyjs', 'react', 'web developer'],
  authorName: 'Laura DiTommaso',
  githubUsername: 'lmd808',
  authorAvatar: '/me.png',
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
        month: 'Oct',
        year: '2020'
      },
      duration: null,
      occupation: "Lead Web Applications Developer",
      description: "I lead a strong team of developers. I'm responsible for the development and execution of client's sites. I stress communication and innovation. Always making sure the client is content."
  
    },  {
      company: "MS&S",
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
  portfolio: [
    {
      image: "./images/Projects/taj.png",
      description: "Taj Vending Services",
      url: "https://www.tajvending.com/"
    },
    {
      image: "/foe.png",
      description: "Festival of the Elves",
      url: "https://www.festivaloftheelves.com/"
    },
    {
      image: "/brunswick.png",
      description: "Brunswick Regional Dental Group",
      url: "https://www.brunswickregionaldentalgroup.com/"
    },
    {
      image: "/iwg.png",
      description: "IWG",
      url: "https://www.iwgplc.com/"
    },
    {
      image: "/come.jpeg",
      description: "Barkable: Coming Soon",
      url: null
    }
    /* more portfolio items here */
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/laura-ditommaso/",
    github: "https://github.com/lmd808",
    email: "laura@lauraditommaso.dev"
  },
  siteUrl: 'https://lauraditommaso.dev',
  pathPrefix: '/app', // Note: it must *not* have a trailing slash.
  siteCover: 'cover1.png',
  googleAnalyticsId: 'G-VPVB30J6RX',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: false, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/icon-32x32.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Resume',
      url: '/resume'
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }, 
    {
      label: 'Contact',
      url: '/contact'
    }
  ]
}