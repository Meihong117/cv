import React, {useState} from 'react'
import {AccordionSection,Contanier,Wrap,Dropdown,BackgroundImg,VideoBg} from './EducationElems.js'
import {Data} from './Data'
import { IconContext } from 'react-icons'
import { FiChevronsDown,FiChevronsUp } from "react-icons/fi";
import img from '../../images/graduate.jpg'

const EducationDetail = () => {
    const[clicked,setClicked]=useState(false);
    const toggle=index=>{
        if(clicked===index) {return setClicked(null)}
        setClicked(index)
    }
    return (
            <IconContext.Provider value={{}}>
                <AccordionSection>
                <VideoBg  src={img} />
                    <Contanier>
                        {Data.map((item,index)=>{
                            return (
                                <>
                                <Wrap onClick={()=>toggle(index)} key={index}>
                                    <h1>{item.degree}</h1>
                                    <span>{clicked===index? <FiChevronsDown />:<FiChevronsUp />}</span>
                                </Wrap>
                                {clicked===index?(
                                    <Dropdown>
                                        <h3>{item.university}</h3>
                                        <ol>
                                            <li>{item.description1}</li>
                                            <li>{item.description2}</li>
                                            <li>{item.description3}</li>
                                            <li>{item.description4}</li>
                                            <li>{item.description5}</li>
                                            <li>{item.description6}</li>
                                            <li>{item.description7}</li>
                                        </ol>
                                    </Dropdown>
                                ):null}
                                </>
                            );
                        })}
                    </Contanier>
                </AccordionSection>
            </IconContext.Provider>
    )
}

export default EducationDetail
