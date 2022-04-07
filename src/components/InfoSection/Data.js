import img1 from '../../images/img-1.svg'
import img2 from '../../images/img-2.svg'
import img3 from '../../images/img-3.svg'
import skill from '../../images/skill.svg'

export const infoData=[
    //education
    {
        id: 'education',
        lightBg: true,
        lightText: false, //
        lightTextDesc: false,
        topLine1: 'EDUCATION',
        headline1: 'University of Canterbury - NZ',
        description1: 'Graduate Diploma, Computer Science, 06/2019',
        headline2: 'Yanbian University - China',
        description2: 'BE(Hons), Chemical Engineering, 06/2015',
        buttonLabel: 'See Details',
        imgStart: false,
        img: img1,
        alt:'Car',
        dark: true,
        primary: true,
        darkText:true,
        to:'education'
    },
    // projects
    {
        id: 'projects',
        lightBg: false,
        lightText: true,
        lightTextDesc: true,
        topLine1: 'PERSONAL PROJECTS',
        description1:'Azure Project',
        description2:'Converter',
        description3: 'Traveling Website',
        description4: ' CSS/HTML/DOM Documentations',
        description5: 'ReactJs Portfolios',
        description6: 'Design Coffee Ordering App',
        buttonLabel: 'See Details',
        imgStart: true,
        img: img2,
        alt:'Car',
        dark: true,
        primary: true,
        darkText:false,
        to:'projects'
    },
    //skills
    {
        id: 'skill',
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine1: 'SKILLS',
        description1: 'CSS3 / HTML5 / JavaScript(ES6)',
        description2: 'VueJs / ReactJS',
        description3: 'C# .NET Core6',
        description4: 'Github / Azure',
        description5: 'UX/UI',
        description6: 'Restful API / ExpressJs / Npm',
        description7: 'MySQL',
    
        buttonLabel: 'See Details',
        imgStart: false,
        img: skill,
        alt:'skill',
        dark: true,
        primary: true,
        darkText:true,
        to:'skill'
    }
]


export const homeObjectThree={
    id: 'hireme',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine1: 'Hire Me?',
    headline1: 'Would you like to hire me?',
    description1: 'Please click the button below',
    buttonLabel: 'Send Email',
    imgStart: true,
    img: img3,
    alt:'Car',
    dark: true,
    primary: true,
    darkText:true,
    to:'hireme'
}

