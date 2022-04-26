import {React, useState} from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,  ServicesH2, ServicesP,ServicesIcon} from './WorkHistoryElements'
import {Work} from './WorkData'

// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const services = () => {
   
    return (
        <ServicesContainer id='history'>
            <ServicesH1>WORK HISTORY</ServicesH1>
            <ServicesWrapper>
                {Work.map((item,index)=>{
                    return(
                        <ServicesCard>
                            <ServicesIcon src={item.icon}/>
                            <ServicesH2 to="work">{item.title}</ServicesH2>
                            <ServicesP>{item.time}</ServicesP>
                        </ServicesCard>
                    )
                })}
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default services
