import React,{useState} from 'react'
import Hero from '../components/HeroSection/Hero'
import { homeObjectOne,homeObjectTwo,homeObjectThree } from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection/InfoSection'
import NavBar from '../components/NavBar/NavBar'
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
            <InfoSection {...homeObjectOne}/>
            <InfoSection {...homeObjectTwo}/>
            <Services />
            <InfoSection {...homeObjectThree}/>


        </>
    )
}

export default Home
