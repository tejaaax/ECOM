import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(https://st4.depositphotos.com/1496387/30013/v/950/depositphotos_300134644-stock-illustration-fashion-seamless-background-clothing-collection.jpg);

background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width:25%;
padding: 20px;
background-color: white;
${mobile({ width:"75%"})}
`
const Title = styled.h1`
font-size: 25px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 15px 0px;
padding: 10px;
`
const Button = styled.button`
width: 30%;
border: none;
padding: 15px 20px;
color: #f0f0f0;
background-color: black;
cursor: pointer;
font-size: 18px;
margin-bottom: 10px;
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>Login</Button>
                    <Link>forgot password?</Link>
                    <Link>Create new account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
