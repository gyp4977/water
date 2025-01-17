import axios from "axios";

function userLoginReq(username, password) {
    return axios.post('http://localhost:9090/api/auth/login',
    // return axios.post('/api/auth/login',
        {
            username: username,
            password: password
        }).then(res => {
            return res.data.accessToken
        })
}
function userRegisterReq(username, password) {
   
    return axios.post('http://localhost:9090/api/auth/register',
        {
            username: username,
            password: password,
        }).then(res => {
            return res.data.accessToken
        })
}



export {
    userLoginReq,userRegisterReq
}