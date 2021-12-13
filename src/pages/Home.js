import React,{useState} from 'react'
import Footer from '../components/Footer/Footer'
import Summary from '../components/Summary/Summary'
import { homeObjectEducation,homeObjectProject,homeObjectThree, homeObjectSkill } from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection/InfoSection'
import NavBar from '../components/NavBar/NavBar'
import Projects  from '../components/Projects/Projects'
import WorkHistory from '../components/WorkHistory/WorkHistory'
import SideBar from '../components/Sidebar/SideBar'
import Hire from '../components/Hire/Hire'


const Home = () => {
const [isOpen, setIsOpen]=useState(false)

const toggle=()=>{
    setIsOpen(!isOpen)
}

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <Summary />
            <InfoSection {...homeObjectEducation}/>
            <InfoSection {...homeObjectProject}/>
            <InfoSection {...homeObjectSkill}/>
            <WorkHistory />
            <Hire />
            <Footer />


        </>
    )
}

export default Home
