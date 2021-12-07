import img1 from '../../images/img-1.svg'
import img2 from '../../images/img-2.svg'
import img3 from '../../images/img-3.svg'


export const homeObjectOne={
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine1: 'EDUCATION',
    headline1: 'University Of Canterbury - NZ',
    description1: 'Graduate Diploma, Computer Science, 06/2019',
    headline2: 'Yanbian University - China',
    description2: 'BE(Hons), Chemical Engineering, 06/2015',
    buttonLabel: 'See Details',
    imgStart: false,
    img: img1,
    alt:'Car',
    dark: true,
    primary: true,
    darkText:false,
    to:'education'
}

export const homeObjectTwo={
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine1: 'PERSONAL PROJECTS',
    headline1: 'Short stories about nature, environment, pollution',
    description1: 'This section has stories where people feel an affinity to the outdoors, or nature features prominently in the action for good or bad.',
    buttonLabel: 'Discover',
    imgStart: true,
    img: img2,
    alt:'Car',
    dark: false,
    primary: false,
    darkText:true,
    to:'discover'
}

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
    dark: false,
    primary: false,
    darkText:true,
    to:'hireme'
}

