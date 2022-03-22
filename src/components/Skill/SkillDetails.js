import React from 'react'
import {SkillDeatilContainer,SkillWrapper,SkillCards,CardImg,Card} from './SkillDeatilsElem'
import {Data} from './Data'


const SkillDeatil = () => {
    return (
        <>
            <SkillDeatilContainer>
                <SkillWrapper>
                    <SkillCards>
                        {Data.map((item)=>{
                            return(
                                <>
                                    <Card>
                                        <CardImg src={item.img} alt={item.alt}/> 
                                        <h3>Familiarity：{item.familiarity}</h3>
                                    </Card>
                                </>
                            )
                        })}
                    </SkillCards>
                </SkillWrapper>
            </SkillDeatilContainer>
        </>
    )
}

export default SkillDeatil
