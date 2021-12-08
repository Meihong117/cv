import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,  ServicesH2, ServicesP,ServicesIcon} from './WorkHistoryElements'

import Icon1 from '../../images/img-4.svg'
import Icon2 from '../../images/img-5.svg'
import Icon3 from '../../images/img-6.svg'
import Icon4 from '../../images/img-7.svg'

// import WorkDetial from '../WorkDetail/WorkDetails'

const services = ({workDetail}) => {
    console.log(workDetail)
    return (
        <ServicesContainer id='history'>
            <ServicesH1>WORK HISTORY</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2 to='work'>FRONT OF HOUSE</ServicesH2>
                    <ServicesP>10/2020 - Current</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2 to='work'>FRONT OF HOUSE SUPERVISOR</ServicesH2>
                    <ServicesP>12/2018 - 12/2019</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2 to='work'>FRONT OF HOUSE MANAGER</ServicesH2>
                    <ServicesP>09/2017 - 01/2018</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2 to='work'>COURSE CONSULTANT</ServicesH2>
                    <ServicesP>07/2016 - 08/2017</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default services
