import React, { useEffect, useReducer, useState } from 'react'
import { Container } from 'react-bootstrap'
import { initialState, reducer } from '../adminReducer/AdminReducer'
import apiEndPoints from '../config/Api-endpoints'
import { getRequest } from '../service/axios.service'

const Profile = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [data, setData] = useState([])
    // const getAdmin = useCallback(async () => {
    //     try {
    //         let response = await getRequest(apiEndPoints.getUser)
    //        setData(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [])

    const getAdmin = async () => {
        try {
            let response = await getRequest(apiEndPoints.getUser)
            // setData(response.data)
            dispatch({type:"success",payload:response.data})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAdmin()
    }, [])
    // console.log(data)
    return (
        <Container>
            <div className='ps-5 pt-4'>
                <h3>Admin Profile </h3>
                <img className='img-fluid   ' style={{ width: "10%" }} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />

                <p className='pt-3'>id:<span style={{ fontWeight: "bold" }}>{state.admin.id}</span></p>
                <p >Name:  <span style={{ fontWeight: "bold" }}>{state.admin.name}</span> </p>
                <p>Address:</p>

                <p>Email:<span style={{ fontWeight: "bold" }}>{state.admin.email}</span></p>
                <p>Phone:</p>
                <p>Mobile:<span style={{ fontWeight: "bold" }}>{state.admin.mobile}</span></p>


                {/* <button className='btn btn-sm bg-primary text-white'>Update</button> */}

            </div>
        </Container>
    )
}

export default Profile