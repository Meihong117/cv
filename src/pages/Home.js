import React,{useState} from 'react'
import Footer from '../components/Footer/Footer'
import Hero from '../components/HeroSection/Hero'
import { homeObjectEducation,homeObjectProject,homeObjectThree, homeObjectSkill } from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection/InfoSection'
import NavBar from '../components/NavBar/NavBar'
import Projects  from '../components/Projects/Projects'
import Services from '../components/Services/Services'
import SideBar from '../components/Sidebar/SideBar'

const Home = () => {
const [isOpen, setIsOpen]=useState(false)

const toggle=()=>{
    setIsOpen(!isOpen)
}

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <Hero />
            <InfoSection {...homeObjectEducation}/>
            <InfoSection {...homeObjectProject}/>
            {/* <Projects /> */}
            <InfoSection {...homeObjectSkill}/>
            <Services />
            <InfoSection {...homeObjectThree}/>
            <Footer />


        </>
    )
}

export default Home
