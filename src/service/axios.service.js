import axios from "axios";


const httpRequest = axios.create({
    baseURL: "https://cacapi.neptekasolutions.com/",
    timeout: 30000,
    timeoutErrorMessage: "sever timed out",
    headers: {
        "content-type": "application/json"
    }
})

// httpRequest.interceptors.response.use((response) => {



//     if (response.status === 200 || response.status === 201) {

//         return response.data

//     } else {

//         throw response.data
//     }
// })



export const postRequest = (url, data) => {
    return httpRequest.post(url, data)
}
export const addData = (url, data) => {
    let token = localStorage.getItem("access_token")
    console.log(token)
    let config = {
        headers: {
            'authorization': `Bearer  ${token}`
        }
    }
    return httpRequest.post(url, data, config)
}
export const getRequest = (url) => {
    let access_token = sessionStorage.getItem("access_token")
    console.log(access_token)

    let config = {
        headers: {
            "authorization": `Bearer ${access_token}`
        }
    }
    return httpRequest.get(url, config)
}