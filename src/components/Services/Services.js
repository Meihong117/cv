import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,  ServicesH2, ServicesP,ServicesIcon} from './ServicesElements'

import Icon1 from '../../images/img-4.svg'
import Icon2 from '../../images/img-5.svg'
import Icon3 from '../../images/img-6.svg'
import Icon4 from '../../images/img-7.svg'



const services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>WORK HISTORY</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>FRONT OF HOUSE</ServicesH2>
                    <ServicesP>10/2020 - Current</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>FRONT OF HOUSE SUPERVISOR</ServicesH2>
                    <ServicesP>12/2018 - 12/2019</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>FRONT OF HOUSE MANAGER</ServicesH2>
                    <ServicesP>09/2017 - 01/2018</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>COURSE CONSULTANT</ServicesH2>
                    <ServicesP>07/2016 - 08/2017</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default services
