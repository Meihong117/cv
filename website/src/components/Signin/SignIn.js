import React from 'react'
import {Container,FormWrap,Icon, Form,FormH1, FormLabel,FormInput,FormButton, Text, FormContent} from './SigninElements'

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>LOGO</Icon>
                <FormContent>
                    <Form action='#'>
                    <FormH1>Sign In</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required placeholder='Please enter your email'/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required placeholder='Please enter your password'/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text to='/'>Forgot Password?</Text>
                    <Text to='/signup'>Sign up for a new account?</Text>
                </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn
