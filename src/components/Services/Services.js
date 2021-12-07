import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,  ServicesH2, ServicesP,ServicesIcon} from './ServicesElements'

import Icon1 from '../../images/img-4.svg'
import Icon2 from '../../images/img-5.svg'
import Icon3 from '../../images/img-6.svg'


const services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce pollution</ServicesH2>
                    <ServicesP>We help reduce ...</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce pollution</ServicesH2>
                    <ServicesP>We help reduce ...</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce pollution</ServicesH2>
                    <ServicesP>We help reduce ...</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default services
