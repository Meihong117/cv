import React from 'react'
import { BiHappy } from "react-icons/bi";
import {Container,SuccessWrapper,SuccessTop,Icon,SuccessText, SuccessBottom,Content,ContinueButton} from './SignUpSuccedElems'

const SignUpSucced = () => {
    return (
        <Container>
            <SuccessWrapper>
                <SuccessTop>
              
                       <Icon>
                            <BiHappy />
                        </Icon>
                        <SuccessText>
                            SUCCESS
                        </SuccessText> 
                  
                </SuccessTop>

                <SuccessBottom>
                    
                        <Content>
                            Congratulations, your account has been successfully created.
                        </Content>
                        <ContinueButton type='submit' to='/signin'>
                            Continue
                        </ContinueButton>
                
                </SuccessBottom>
            </SuccessWrapper>          
        </Container>
    )
}

export default SignUpSucced
