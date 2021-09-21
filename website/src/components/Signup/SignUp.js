import React,{useState} from 'react'
// import useForm from './useForm';
// import validate from './validateInfo';
import FormSuccess from './FormSuccess'
import {Container,FormWrap,Icon, Form,FormH1, FormLabel,FormInput,FormButton, Text, FormContent, FormSection,Check} from './SignupElements'

const SignUp = () => {


     
     
    return (
        <>
                <Container >
                    <FormWrap>
                        <Icon to='/'>LOGO</Icon>
                        <FormContent>
                            <Form action='#'>
                            <FormH1>Sign Up</FormH1>
        
                           
                                <FormLabel htmlFor='username'>Username</FormLabel>
                                <FormInput 
                                type='username' 
                                required 
                                name='username'
                                placeholder='Enter your username'
                                // value={data.username}
                                // onChange={updateField}
                                />
                            
                            
                           
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <FormInput 
                                type='email' 
                                required 
                                name='email'
                                placeholder='Enter your email'
                                // value={data.email}
                                // onChange={updateField}
                                />
                           
                            
                        
                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <FormInput 
                                type='password' 
                                required 
                                name='password'
                                placeholder='Enter your password'
                                // value={data.password}
                                // onChange={updateField}
                                />
                          
                            
                          
                                <FormLabel htmlFor='password'>Confirm Password</FormLabel>
                                <FormInput 
                                type='password' 
                                required 
                                name='password2'
                                placeholder='Confirm your password'
                                // value={data.password}
                                // onChange={updateField}
                                />
                                
                            <FormButton type='submit' to='/'>Sign Up</FormButton>
        


                            <Text to='/signup'>Aready Have an account? Login here</Text>
                        </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
                
                
        
        </>
    )
}

export default SignUp
