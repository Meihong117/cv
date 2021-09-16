import React,{useState} from 'react'
import NavBar from '../components/NavBar/NavBar'
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
        </>
    )
}

export default Home
