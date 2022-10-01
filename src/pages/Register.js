import React, { useState } from 'react'
import styled from "styled-components"
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { postRequest } from '../service/axios.service';
import apiEndPoints from '../config/Api-endpoints';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {


    const navigate = useNavigate()
    const [email, SetEmail] = useState({})

    const [password, SetPassword] = useState({})

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            password_confirmation: ""
        },
        // validationSchema: validate,
        onSubmit: (values) => {

            console.log(values)
            handleSubmit(values)
        }


    })

    const handleSubmit = async (data) => {

        try {
            const register = await postRequest(apiEndPoints.register, data);
            console.log(register)
            navigate("/login")





        } catch (error) {
            console.log(error)

            SetEmail(error.response.data.email)
            SetPassword(error.response.data.password)
        }

    }
    console.log(email)
    const notify = () => toast.success("Wow so easy!", { position: "top-center", });

    return (
        <Container>
            <ToastContainer />
            <Layer></Layer>

            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={formik.handleSubmit}>



                    <Input name="email" placeholder="email" onChange={formik.handleChange} value={formik.values.email} ></Input>
                    {email ? <em style={{ color: "red" }}>{email[0]}</em> : null}
                    <Input type="password" name="password" placeholder="password" onChange={formik.handleChange} value={formik.values.password}></Input>
                    {password ? <em style={{ color: "red" }}>{password[0]}</em> : null}
                    <Input type="password" name="password_confirmation" placeholder="confirm password" onChange={formik.handleChange} value={formik.values.confirm}></Input>
                    {/* {formik.errors.password_confirmation ? <em style={{ color: "red" }}>{formik.errors.password_confirmation}</em> : null} */}

                    <Aggrement>
                        By creating an account. I can sent the processing of my personal data in accordance with the PRIVACY POLICY
                    </Aggrement>
                    <Button type='submit' onClick={notify}>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register

const Container = styled.div`
height: 100vh;
width: 100%;
background: linear-gradient(248.64deg, rgba(254, 0, 244, 0.52) 2.42%, rgba(0, 133, 255, 0.33) 103.73%);
overflow-y: hidden;
position: relative;
display: flex;
justify-content: center;
align-items: center;

`
const Title = styled.h2`
font-weight: 200;
margin-top: 15px;
`
const Wrapper = styled.div`

width: 40%;
padding: 10px 40px;
background-color: transparent;
border: 0.5px solid #fff;
color: #fff;
box-shadow: 0.2px 3px 5px 1px #fff;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
margin: 20px 0;




`
const Input = styled.input`
margin:5px;
padding: 10px;
flex-basis:100% ;
min-width: 40%;
outline: none;
background: transparent;
color: #fff;
border:1px solid #000 ;

::placeholder{
    font-size: 15px;
    letter-spacing: 0.3px;
    color: #fff;
}


`
const Aggrement = styled.div`
font-size: 14px;
margin: 20px 0;
padding-left: 3px;
`
const Button = styled.button`
border: 0.5px solid #fff;
padding:10px;
color: #fff;
background: transparent;
cursor:pointer;

&:hover{
    background-color:#fff ;

    cursor: pointer;
    color:#000 ;
    
}
`

// const Video = styled.video`
// width: 100%;

// z-index: -12;

// position: absolute;
// top: 0;
// left: 0;
// background-size: cover;
// `
const Layer = styled.div`
height: 100vh;
width: 100%;
background: rgba(0,0,0,0.2);
position: absolute;
top: 0;
left: 0;
z-index: -2;
`